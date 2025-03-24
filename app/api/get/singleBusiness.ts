import { getToken } from "../auth/OTP";

export const getBusiness = async (id:string ) => {
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
  
      // Make a GET request to fetch a single business by its ID
      const response = await fetch(`${apiUrl}/businesses/${id}`, {
        method: 'GET', 
        headers: headers,
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch business');
      }
  
      const data = await response.json();
      console.log(data, 'business data'); 
      return data;
    } catch (error) {
      console.error('Error fetching business:', error);
      throw error;
    }
};