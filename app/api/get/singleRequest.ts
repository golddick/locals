// import { getToken } from "../auth/OTP";

// export const getSingleRequest = async (id:string ) => {
//     const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
//     if (!apiUrl) {
//       throw new Error("API URL is not defined in environment variables");
//     }
  
//     try {
//       const token = getToken();
  
//       if (!token) {
//         throw new Error('Token not found');
//       }
  
//       const headers = {
//         localsToken: `${token}`,
//         'Content-Type': 'application/json',
//       };
  
//       // Make a GET request to fetch a single request by its ID
//       const response = await fetch(`${apiUrl}/specialServices/${id}`, {
//         method: 'GET', 
//         headers: headers,
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to fetch special Services');
//       }
  
//       const data = await response.json();
//       console.log(data, 'special Services data'); 
//       return data;
//     } catch (error) {
//       console.error('Error fetching special Services:', error);
//       throw error;
//     }
// };








import { getToken } from "../auth/OTP";

export const getSingleRequest = async (id: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables");
  }

  try {
    const token = await getToken(); // make sure getToken is async if it does async storage

    if (!token) {
      throw new Error("Authorization token not found");
    }

    const response = await fetch(`${apiUrl}/specialServices/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errRes = await response.json();
      throw new Error(errRes?.message || "Failed to fetch special service");
    }

    const data = await response.json();
    console.log("Special Service Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching special service:", error);
    throw error;
  }
};
