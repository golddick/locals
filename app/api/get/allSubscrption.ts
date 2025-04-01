import { getToken } from "../auth/OTP";

// Function to fetch subscriptions
export  const fetchSubscriptions = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables");
  }

  try {
    const token = getToken();
    if (!token) {
      throw new Error("Token not found");
    }

    const headers = {
      localsToken: `${token}`,
      "Content-Type": "application/json",
    };

    const response = await fetch(`${apiUrl}/subscriptions`, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch subscriptions");
    }

    const data = await response.json();
    console.log(data, 'Request data'); 
    return data.data; 
    // return await response.json();
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    throw error;
  }
};