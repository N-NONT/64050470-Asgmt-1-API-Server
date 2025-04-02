import { serviceDroneConfig } from "../services/droneService.js";

export const getConfig = async (req, res, next) => {
  try {
    const { droneId } = req.params;
    const config = await serviceDroneConfig(droneId);
    // console.log(config)

    if (!config) {
        return res.json({}); 
      }

    const data = {  drone_id: config.drone_id,
                    drone_name: config.drone_name,
                    light: config.light,
                    country: config.country,
                    weight: config.weight };

    res.json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};