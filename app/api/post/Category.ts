import { getToken } from "../auth/OTP";


export const createCategory = async (name: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables");
  }

  try {
    const token = getToken(); 

    if (!token) {
      throw new Error("Token not found");
    }

    // Generate a custom description based on the category name
    const description = `This is a category for ${name.toLowerCase()}.`;

    const headers = {
      localsToken: `${token}`, 
      "Content-Type": "application/json",
    };

    const response = await fetch(`${apiUrl}/categories`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ name, description }), 
    });

    if (!response.ok) {
      throw new Error("Failed to create category");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};