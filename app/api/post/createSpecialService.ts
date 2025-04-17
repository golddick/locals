import { getToken } from "../auth/OTP"; // Import the function to get the token

// Function to create a new service
export const createServices = async (ServiceData: {
  description: string;
  expireyDate: Date;
  address: string;
  services:string[]
}) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL; 

  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables");
  }
 

  try {
    // Get the authentication token
    const token = getToken();

    if (!token) {
      throw new Error("Token not found");
    }

    // Prepare the service data for the API request
    const headers = {
      localsToken: `${token}`, 
      "Content-Type": "application/json",
    };


    // Send a POST request to the API to create the service
    const response = await fetch(`${apiUrl}/specialServices`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        description: ServiceData.description,
        expireyDate: ServiceData.expireyDate,
        address: ServiceData.address,
        services:ServiceData.services
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create service");
    }

    const data = await response.json();
    return data; 

  } catch (error) {
    console.error("Error creating service:", error);
    throw error;
  }
};
