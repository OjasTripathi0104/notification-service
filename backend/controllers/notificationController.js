const Notification = require('../models/Notification');
const { sendNotificationByType } = require('../services/notificationService');

exports.sendNotification = async (req, res) => {
    try {
        const { userId, type, message } = req.body;
        const notification = new Notification({ userId, type, message });

        const status = await sendNotificationByType(notification);
        notification.status = status;

        await notification.save();
        res.status(201).json(notification);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getUserNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ userId: req.params.id });
        res.json(notifications);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
