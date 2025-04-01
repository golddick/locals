interface ResetPasswordData {
    email: string;
    password: string;
  }
  
  interface ApiResponse {
    success: boolean;
    message?: string;
    data?: any;
  }
  
  export const resetPassword = async (data: ResetPasswordData): Promise<ApiResponse> => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
    if (!apiUrl) {
      throw new Error("API URL is not defined in environment variables");
    }
  
    try {
      const response = await fetch(`${apiUrl}/users/resetPassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
        throw new Error(responseData.message || "Password reset failed");
      }
  
      return {
        success: true,
        message: "Password reset successfully",
        data: responseData
      };
    } catch (error: any) {
      console.error("Password reset error:", error);
      return {
        success: false,
        message: error.message || "An error occurred during password reset"
      };
    }
  };