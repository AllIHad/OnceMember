import mongoose from "mongoose";

const Schema = mongoose.Schema

const memberSchema = new Schema({
    title: {
        type : String,
        required : true
    },
    body: {
        type : String,
        required : true
    },
    name: {
        type : String,
        required : true
    },
})

const Member = mongoose.models.Member || mongoose.model('Member', memberSchema)
export default Member;