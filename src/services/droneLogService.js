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


// import axios from "axios";

// export const serviceDroneConfig = async (droneId) => {
//   try {
//     const response = await axios.get(process.env.DRONE_CONFIG_API);
    
//     if (response.data.status !== "ok") {
//       throw new Error("Invalid response from server");
//     }

//     const droneData = response.data.data.find(d => d.drone_id == droneId);

//     return droneData || null;  

//   } catch (error) {
//     console.error("Error fetching drone config:", error.message);
//     return null;  
//   }
// };

