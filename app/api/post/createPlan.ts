import { getToken } from "../auth/OTP"; // Import the function to get the token

// Function to create a new subscription plan
export const createSubscriptionPlan = async (subscriptionData: {
  name: string;
  price: string;
  duration: string;
  features: string[];
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

    // Prepare the subscription data for the API request
    const headers = {
      localsToken: `${token}`,
      "Content-Type": "application/json",
    };

    // Send a POST request to the API to create the subscription
    const response: Response = await fetch(`${apiUrl}/subscriptions`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        name: subscriptionData.name,
        price: subscriptionData.price,
        duration: subscriptionData.duration,
        features: subscriptionData.features,
      }),
    });

    // Check if the response is OK (status 200-299)
    if (!response) {
      throw new Error(`Failed to create subscription plan`);
    }

    // Ensure the response is JSON
    const contentType = response.headers.get("Content-Type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json(); // Parse the response as JSON
    } else {
      return {}; // Or return an empty object, or handle accordingly
    }

  } catch (error) {
    console.error("Error creating subscription:", error);
    throw error; // Rethrow the error to handle it at a higher level (e.g., in UI)
  }
};
