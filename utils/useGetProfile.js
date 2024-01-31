import { useState } from "react";
import { useAuth } from "../AuthContext";

const useGetProfile = () => {
  const [data, setData] = useState([]);
  const { success, error } = useAuth();

  const getData = async () => {
    try {
      const response = await fetch(
        "https://app.codestudiohub.com/user_panel/getprofile.php",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status) {
        const responseData = await response.json();
        setData(responseData);
      } else {
        console.error("Failed to fetch user profile data");
      }
    } catch {
      console.error("Error during fetch:", error);
    }
  };
  return { data, getData };
};

export default useGetProfile;
