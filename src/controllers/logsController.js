import { getDroneLogs } from "../services/droneLogService.js";

export const getLogs = async (req, res, next) => {
  try {
    const { droneId } = req.params;

    const logs = await getDroneLogs(droneId);

    if (!logs || logs.length === 0) {
      return res.json([]); 
    }

    logs.sort((a, b) => new Date(b.created) - new Date(a.created));

    const limitedLogs = logs.slice(0, 25);

    const formattedLogs = limitedLogs.map(log => ({
        drone_id: log.drone_id,
        drone_name: log.drone_name,
        created: log.created,
        country: log.country,
        celsius: log.celsius
        }));

    res.json(formattedLogs);

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
