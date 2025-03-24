import { getToken } from "../auth/OTP";

  export const getAllUsers = async (page: number = 1, limit: number = 10) => {
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
      `${apiUrl}/admin/users`,
      { 
        method: 'GET',
        headers: headers,
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const data = await response.json();
    console.log(data, 'users data'); 
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};