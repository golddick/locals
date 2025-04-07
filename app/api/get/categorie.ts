import { getToken } from "../auth/OTP";

export const getAllCategory = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
    if (!apiUrl) {
      throw new Error("API URL is not defined in environment variables");
    }
  
    try {
  
      const headers = {
        'Content-Type': 'application/json',
      };
  
      // Make a GET request to fetch the user by userId
      const response = await fetch(`${apiUrl}/categories`, {
        method: 'GET',
        headers: headers,
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch Categorie');
      }
  
      const data = await response.json();
      console.log(data, 'cat data'); 
      console.log(data.data, 'cat data dta'); 
      return data;
    } catch (error) {
      console.error('Error fetching Categorie:', error);
      throw error;
    }
  };