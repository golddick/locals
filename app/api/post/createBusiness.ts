import { getToken } from "../auth/OTP"; // Import the function to get the token

// Function to create a new business
export const createBusiness = async (businessData: {
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  category_name: string;
  profileUrl:string[]
  services:string
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

    // Prepare the business data for the API request
    const headers = {
      localsToken: `${token}`, 
      "Content-Type": "application/json",
    };


    // Send a POST request to the API to create the business
    const response = await fetch(`${apiUrl}/businesses`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        name: businessData.name,
        email: businessData.email,
        phone: businessData.phone,
        address: businessData.address,
        description: businessData.description,
        category_name: businessData.category_name, 
        category_description:`${businessData.category_name}' custom description`,
        profileUrl:businessData.profileUrl,
        services:businessData.services
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create business");
    }

    const data = await response.json();
    return data; 

  } catch (error) {
    console.error("Error creating business:", error);
    throw error;
  }
};
