
  // utils/auth.js or any appropriate file
export const getUserInfo = () => {
    // Ensure this runs only on the client side
    if (typeof window !== 'undefined') {
      try {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
          return JSON.parse(userInfo); // Parse and return user info if it exists
        }
      } catch (error) {
        console.error('Error retrieving user info from localStorage:', error);
      }
    }
    return null; // Return null if no user info is found or if not in a browser environment
  };