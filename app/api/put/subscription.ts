import { getToken } from "../auth/OTP";

export const updateSubscriptionPlan = async (Id: string, subscriptionData: any) => {
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

    const response = await fetch(`${apiUrl}/subscriptions/${Id}`, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify(subscriptionData),
    });

    if (!response.ok) {
      throw new Error('Failed to update subscription plan');
    }

    const data = await response.json();
    console.log('Subscription plan updated successfully:', data);
    return data;
  } catch (error) {
    console.error('Error updating subscription plan:', error);
    throw error;
  }
};
