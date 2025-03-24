import { getToken } from "../auth/OTP";

export const deleteBusiness = async (businessId: string) => {
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
  
      const response = await fetch(`${apiUrl}/admin/businesses/${businessId}`, {
        method: 'DELETE',
        headers: headers,
      });
  
      if (!response.ok) {
        const errorData = await response.json(); 
        throw new Error(errorData.message || 'Failed to delete business');
      }
  
      const data = await response.json();
      console.log('Business deleted successfully:', data);
      return data;
    } catch (error) {
      console.error('Error deleting business:', error);
      throw error;
    }
  };