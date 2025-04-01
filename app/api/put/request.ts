import { getToken } from "../auth/OTP";

// Modify the function to terminate a request
export const terminateRequest = async (requestId: string, status: 'terminated' | 'pending') => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables");
  }

  try {
    // Retrieve token for authentication
    const token = getToken();

    if (!token) {
      throw new Error('Token not found');
    }

    const headers = {
      'localsToken': `${token}`,
      'Content-Type': 'application/json',
    };

    // Make the request to terminate or update the status of the request
    const response = await fetch(`${apiUrl}/specialServices/${requestId}/terminate`, {
      method: 'PATCH', 
      headers: headers,
      body: JSON.stringify({ status }), 
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to update request status');
    }

    const data = await response.json();
    console.log('Request terminated successfully:', data);
    return data;
  } catch (error) {
    console.error('Error terminating request:', error);
    throw error;
  }
};
