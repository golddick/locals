import { getToken } from "../auth/OTP";

export const getSingleRequest = async (id:string ) => {
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
  
      // Make a GET request to fetch a single request by its ID
      const response = await fetch(`${apiUrl}/specialServices/${id}`, {
        method: 'GET', 
        headers: headers,
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch special Services');
      }
  
      const data = await response.json();
      console.log(data, 'special Services data'); 
      return data;
    } catch (error) {
      console.error('Error fetching special Services:', error);
      throw error;
    }
};