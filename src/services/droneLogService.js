import axios from "axios";

export const getDroneLogs = async (droneId) => {
  try {
    const response = await axios.get(process.env.DRONE_LOG_SERVER);

    if (!response.data || !response.data.items) {
      throw new Error("Invalid response format");
    }
    
    const logData = response.data.items.filter(d => d.drone_id == droneId);

    // console.log("Drone Logs:", logData);

    return logData;  

  } catch (error) {
    console.error("Error fetching drone logs:", error.message);
    return [];  
  }
};


export const saveDroneLog = async (logData) => {

    const AUTH_HEADER = { Authorization: "Bearer 20250301efx" };

    try {
      const response = await axios.post(process.env.DRONE_LOG_SERVER, logData, { headers: AUTH_HEADER });
  
      if (!response.data) {
        throw new Error("Failed to save drone log");
      }
  
      return response.data;
    } catch (error) {
      console.error("Error saving drone log:", error.message);
      throw error;
    }
  };