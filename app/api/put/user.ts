import { getToken } from "../auth/OTP";

export const updateUserInfo = async (userId: string, userData: any) => {
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
  
      const response = await fetch(`${apiUrl}/users/${userId}`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(userData),
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







  export const adminUpdateUserInfo = async (userId: string, userData: any) => {
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
  
      const response = await fetch(`${apiUrl}/users/${userId}/update`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(userData),
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

  export const adminRestrictUser = async (userId: string, status: 'active' | 'in-active') => {
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
      

        const response = await fetch(`${apiUrl}/users/${userId}/restrict`, { 
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify({ status }), 
        });

        if (!response.ok) {
            const errorData = await response.json(); 
            throw new Error(errorData.message || 'Failed to update user status');
        }

        const data = await response.json();
        console.log('User status updated successfully:', data);
        return data;
    } catch (error) {
        console.error('Error updating user status:', error);
        throw error;
    }
};