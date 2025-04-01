import { PlanSubscriptionType } from "@/type/business_type";
import { getToken } from "../auth/OTP"; // Assuming this function retrieves the token



export const getSinglePlan = async (id: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables");
  }

  try {
    // Get the token (Assuming getToken() fetches the correct token)
    const token = getToken();

    if (!token) {
      throw new Error('Token not found');
    }

    // Define the headers with the token
    const headers = {
      localsToken: `${token}`,
      'Content-Type': 'application/json',
    };

    // Make the GET request to fetch a single subscription plan by ID
    const response = await fetch(`${apiUrl}/subscriptions/${id}`, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch subscription plan with ID: ${id}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    console.log(data, 'Fetched subscription plan data');
    return data.data;
  } catch (error) {
    console.error('Error fetching subscription plan:', error);
    throw error;
  }
};
