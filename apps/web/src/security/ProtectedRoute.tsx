import { logInCheck } from "@/Hooks/userApi";
import { useEffect, useState } from "react";

const useAuthCheck = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkUserLogin = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      try {
        const response = await logInCheck(token);
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Login check failed:", error);
        setIsAuthenticated(false);
      }
    };

    checkUserLogin();
  }, []);

  return isAuthenticated;
};

export default useAuthCheck;
