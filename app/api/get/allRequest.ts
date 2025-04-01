import { getToken } from "../auth/OTP";

  export const getAllSpecialRequest = async (page: number = 1, limit: number = 10) => {
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
      'localsToken': `${token}`,
      'Content-Type': 'application/json',
    };

    const response = await fetch(
      `${apiUrl}/specialServices`,
      { 
        method: 'GET',
        headers: headers,
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Request');
    }

    const data = await response.json();
    console.log(data, 'Request data'); 
    return data; 
  } catch (error) {
    console.error('Error fetching Request:', error);
    throw error;
  }
};




export const getAllUserSpecialRequest = async (page: number = 1, limit: number = 10) => {
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
      'localsToken': `${token}`,
      'Content-Type': 'application/json',
    };

    const response = await fetch(
      `${apiUrl}/specialServices/user`,
      { 
        method: 'GET',
        headers: headers,
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Request');
    }

    const data = await response.json();
    console.log(data, 'Request data'); 
    return data; 
  } catch (error) {
    console.error('Error fetching Request:', error);
    throw error;
  }
};