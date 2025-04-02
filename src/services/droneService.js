import axios from "axios";


export const serviceDroneConfig = async (droneId) => {
  try {
    const response = await axios.get(process.env.DRONE_CONFIG_API);
    
    if (response.data.status !== "ok") {
      throw new Error("Invalid response from server");
    }

    const droneData = response.data.data.find(d => d.drone_id == droneId);

    if (!droneData) {
      throw new Error(`Drone with ID ${droneId} not found`);
    }
    
    return droneData;

  } catch (error) {
    console.error("Error fetching drone config:", error.message);
    throw error;
  }
};

