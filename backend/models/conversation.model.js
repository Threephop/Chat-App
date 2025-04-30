import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    message: [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: []
    }]
},
{
    timestamps: true // Automatically add createdAt and updatedAt fields
});

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;