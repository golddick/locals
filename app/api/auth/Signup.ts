import React from 'react';
import { setCookie } from 'nookies';  

const SignupApi = async (data: any) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables");
  }

  const response = await fetch(`${apiUrl}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Signup failed");
  }

     // Assuming the response contains the token
     if (response.ok) {
      const data = await response.json(); // Or use response.text() depending on the API
      
      // Save the token in localStorage or sessionStorage
      const token = data.data.token; 
      const email = data.data.email
      if (token) {
        localStorage.setItem("authToken", token); 
        localStorage.setItem("userEmail", email); 
        // Alternatively, you can use sessionStorage
        // sessionStorage.setItem("authToken", token);
        
      }


  // console.log(data, 'res data')
  // console.log(data.data.token, 'res token')
  // console.log(response, 'res')

  return data;
}
};

export default SignupApi;