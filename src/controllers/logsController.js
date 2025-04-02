import { getDroneLogs, saveDroneLog } from "../services/droneLogService.js";

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


export const postDroneLog = async (req, res) => {
    try {
        const requiredFields = ["drone_id", "drone_name", "country", "celsius"];
        const receivedFields = Object.keys(req.body);


        const missingFields = requiredFields.filter(field => !receivedFields.includes(field));
        const extraFields = receivedFields.filter(field => !requiredFields.includes(field));

        if (missingFields.length > 0 || extraFields.length > 0) {
            return res.status(400).json({
                error: "Invalid request",
                missing_fields: missingFields.length > 0 ? missingFields : undefined,
                extra_fields: extraFields.length > 0 ? extraFields : undefined
            });
        }

        const { drone_id, drone_name, country, celsius } = req.body;
        const newLog = await saveDroneLog({ drone_id, drone_name, country, celsius });

        res.status(201).json(newLog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


