import { getToken } from "../auth/OTP";

// Helper function to fetch data
const fetchData = async (url: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables");
  }

  try {
    // const token = getToken();

    // if (!token) {
    //   throw new Error("Authentication token is missing.");
    // }

    // const headers = {
    //   "Content-Type": "application/json",
    //   localsToken: token,
    // };

    const response = await fetch(`${apiUrl}${url}`, {
      method: "GET",
      // headers: headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    throw error;
  }
};



// Fetch Trusted Vendors
export const fetchTrustedVendors = async () => {
  try {
    const data = await fetchData("/businesses/trusted-vendors");
    console.log(data, "Trusted Vendors Data");
    return data;
  } catch (error) {
    console.error("Error fetching trusted vendors:", error);
    throw error;
  }
};




// Fetch business under category
export const fetchBusinessUnderCategory = async (categoryId:string) => {
  try {
    const data = await fetchData(`/businesses/${categoryId}/all`);
    console.log(data, "business category data");
    return data;
  } catch (error) {
    console.error("Error fetching business category:", error);
    throw error;
  }
};


// Fetch all services
export const fetchAllServices = async () => {
  try {
    const data = await fetchData("/services");
    console.log(data, "business services data");
    return data;
  } catch (error) {
    console.error("Error fetching business services:", error);
    throw error;
  }
};
