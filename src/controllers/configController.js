import { serviceDroneConfig } from "../services/droneConfigService.js";

export const getConfig = async (req, res, next) => {
  try {
    const { droneId } = req.params;
    const config = await serviceDroneConfig(droneId);
    res.json(config);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};