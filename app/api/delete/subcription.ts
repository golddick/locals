import { getToken } from "../auth/OTP";

// Function to handle subscription deletion
export  const DeleteSubscription = async (id: string) => {
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

    const response = await fetch(`${apiUrl}/subscriptions/${id}`, {
      method: "DELETE",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Failed to delete subscription");
    }

    // toast.success('Subscription deleted successfully');
    // return await response.json();
    const data = await response.json();
    console.log('Subscription deleted successfully', data);
    return data;
  } catch (error) {
    console.error("Error deleting subscription:", error);
    throw error;
  }
};