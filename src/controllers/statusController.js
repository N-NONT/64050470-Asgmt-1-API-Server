import { serviceDroneConfig } from "../services/droneService.js";

export const getConfig = async (req, res, next) => {
  try {
    const { droneId } = req.params;
    
    const config = await serviceDroneConfig(droneId);
    if (!config) {
      return res.json({}); 
    }

    res.json({ condition: config.condition });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};