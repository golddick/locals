// Function to get the token from localStorage
export const getauthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('authToken'); 
  }
  return null;
};

export const getToken = () => {
  if (typeof window !== 'undefined') {
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        return parsedUser.token || null;
      } catch (err) {
        console.error('Error parsing userInfo from localStorage', err);
        return null;
      }
    }
  }
  return null;
};




// Verify OTP Function
export const verifyEmailOtp = async (otp: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables");
  }

  try {
    const token = getauthToken();


    if (!token) {
      throw new Error('Token not found');
    }

    const headers = {
      'Bearer-localsToken': `${token}`,  
      'Content-Type': 'application/json',
    };

    const response = await fetch(`${apiUrl}/users/verifyEmailOtp`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ otp }), 
    });

    if (!response.ok) {
      throw new Error('Verification failed');
    }

    const data = await response.json();
    console.log(data); 
    return data;
  } catch (error) {
    console.error('Error verifying OTP:', error);
    throw error;
  }
};


// Resend OTP Function
export const resendOtp = async (email: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables");
  }

  try {

    const headers = {
      'Content-Type': 'application/json',
    };

    const response = await fetch(`${apiUrl}/users/emailOtp`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ email }),  
    });

    if (!response.ok) {
      throw new Error('Failed to resend OTP');
    }

    const data = await response.json();
    console.log(data);  
    return data;
  } catch (error) {
    console.error('Error resending OTP:', error);
    throw error; 
  }
};


//send resset password send otp
export const resetpasswordOTP = async (email: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables");
  }

  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    const response = await fetch(`${apiUrl}/users/forgotPassword`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ email }),  
    });

    if (!response.ok) {
      throw new Error('Failed to resend OTP');
    }

    const data = await response.json();
    console.log(data);  
    return data;
  } catch (error) {
    console.error('Error resending OTP:', error);
    throw error; 
  }
};


// Verify Password OTP Function
export const verifyPasswordOtp = async (email: string, otp: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not defined in environment variables");
  }

  try {

    const headers = {
      'Content-Type': 'application/json',
    };

    // Send both email and OTP for verification
    const response = await fetch(`${apiUrl}/users/verifyPasswordOtp`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ email, otp }), 
    });

    if (!response.ok) {
      throw new Error('Verification failed');
    }

    const data = await response.json();
    console.log(data); 
    return data;
  } catch (error) {
    console.error('Error verifying OTP:', error);
    throw error;
  }
};


// Export functions
export default { resendOtp, verifyEmailOtp, getToken, resetpasswordOTP };