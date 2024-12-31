import admin from ".,/models/admin.model.js";

export const getAdmins = async (req, res) => {
    try {
        const admins = await admin.find({ active: true }).select("username email");
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error });
    }
};
