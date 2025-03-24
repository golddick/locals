import { getToken } from "../auth/OTP";

  export const getAllBusinesses = async (page: number = 1, limit: number = 10) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables");
  }

  try {
    const token = getToken();
  
    if (!token) {
      throw new Error('Token not found');
    }
    const headers = {
      localsToken: `${token}`,
      'Content-Type': 'application/json',
    };

    const response = await fetch(
      `${apiUrl}/businesses?sort=name&order=desc&page=${page}&count=${limit}`,
      { 
        method: 'GET',
        headers: headers,
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch businesses');
    }

    const data = await response.json();
    console.log(data, 'business data'); // Log the full response
    return data; // Return the array of businesses
  } catch (error) {
    console.error('Error fetching businesses:', error);
    throw error;
  }
};