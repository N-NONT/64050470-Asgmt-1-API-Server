import axios from "axios";

export const getDroneLogs = async (droneId) => {
  try {
    const firstResponse = await axios.get(process.env.DRONE_LOG_SERVER, {
      params: { page: 1, perPage: 500 },
      timeout: 10000,
    });

    if (!firstResponse.data || !firstResponse.data.items) {
      throw new Error("Invalid response format");
    }

    const totalPages = firstResponse.data.totalPages;
    let allLogs = firstResponse.data.items.filter((d) => d.drone_id == droneId);

    for (let page = 2; page <= totalPages; page++) {
      try {
        const res = await axios.get(process.env.DRONE_LOG_SERVER, {
          params: { page, perPage: 500 },
          timeout: 10000,
        });

        if (res.data && res.data.items) {
          allLogs = [...allLogs, ...res.data.items.filter((d) => d.drone_id == droneId)];
        }
      } catch (err) {
        console.warn(`Error fetching page ${page}:`, err.message);
      }
    }

    return allLogs;

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