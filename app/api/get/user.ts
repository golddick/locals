import { getToken } from "../auth/OTP";

export const getUserById = async (userId: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
    if (!apiUrl) {
      throw new Error("API URL is not defined in environment variables");
    }
  
    try {
      const token = getToken();
  
      console.log(token, 'get token for user fetch');
  
      if (!token) {
        throw new Error('Token not found');
      }
  
      const headers = {
        'localsToken': `${token}`,
        'Content-Type': 'application/json',
      };
  
      // Make a GET request to fetch the user by userId
      const response = await fetch(`${apiUrl}/users/${userId}`, {
        method: 'GET',
        headers: headers,
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
  
      const data = await response.json();
      console.log(data, 'llol data'); 
      return data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  };