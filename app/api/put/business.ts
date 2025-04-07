
import { getToken } from "../auth/OTP";

export const updateBusinessInfo = async (businessId: string, businessData: any) => {
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
  
      const response = await fetch(`${apiUrl}/businesses/${businessId}`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(businessData),
      }); 
  
      if (!response) {
        throw new Error('Failed to update user data');
      }
  
      const data = await response.json();
      console.log('User updated successfully:', data);
      return data;
    } catch (error) {
      console.error('Error updating user data:', error);
      throw error;
    }
  };

export const AdminUpdateBusinessInfo = async (businessId: string, businessData: any) => {
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
  
      const response = await fetch(`${apiUrl}/businesses/${businessId}/update`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(businessData),
      }); 
  
      if (!response) {
        throw new Error('Failed to update user data');
      }
  
      const data = await response.json();
      console.log('User updated successfully:', data);
      return data;
    } catch (error) {
      console.error('Error updating user data:', error);
      throw error;
    }
  };



  export const restrictBusiness = async (businessId: string, status: 'active' | 'suspeneded') => {
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

        
  
          const response = await fetch(`${apiUrl}/businesses/${businessId}/restrict`, {
              method: 'PATCH',
              headers: headers,
              body: JSON.stringify({ status }), 
          });
  
          if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message || 'Failed to update business status');
          }
  
          const data = await response.json();
          console.log('Business status updated successfully:', data);
          return data;
      } catch (error) {
          console.error('Error updating business status:', error);
          throw error;
      }
  };