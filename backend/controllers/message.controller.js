import Message from '../models/message.model.js';
import Conversation from '../models/conversation.model.js';

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id; // Assuming you have the senderId from the authenticated user

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });
        if (newMessage) {
            conversation.message.push(newMessage._id);
        }
        await conversation.save();
        await newMessage.save();
        res.status(201).json({
            message: "Message sent successfully",
            conversationId: conversation._id,
            message: newMessage,
        });

    } catch (error) {
        console.log("Error sending message controller:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};