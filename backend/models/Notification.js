const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    userId: String,
    type: { type: String, enum: ['email', 'sms', 'in-app'], required: true },
    message: { type: String, required: true },
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', notificationSchema);
