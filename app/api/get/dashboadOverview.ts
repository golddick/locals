import { getToken } from "../auth/OTP";

export const dashboardOverview = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables");
  }

  try {
    const token = getToken();

    if (!token) {
      throw new Error("Authentication token is missing.");
    }

    const headers = {
      "Content-Type": "application/json",
      localsToken: token,
    };

    const response = await fetch(
      `${apiUrl}/overview`,
      {
        method: "GET",
        headers: headers,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch dashboard overview");
    }

    const data = await response.json();
    console.log(data, " Dashboard Overview Data");
    return data;
  } catch (error) {
    console.error("Error fetching dashboard overview:", error);
    throw error;
  }
};
