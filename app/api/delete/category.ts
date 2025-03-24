import { getToken } from "../auth/OTP";

export const deleteCategory = async (categoryId: string) => {
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
  
      const response = await fetch(`${apiUrl}/categories/${categoryId}`, {
        method: 'DELETE',
        headers: headers, 
      });
  
      if (!response.ok) {
        const errorData = await response.json(); 
        throw new Error(errorData.message || 'Failed to delete category');
      }
  
      const data = await response.json();
      console.log('category deleted successfully:', data);
      return data;
    } catch (error) {
      console.error('Error deleting category:', error);
      throw error;
    }
  };