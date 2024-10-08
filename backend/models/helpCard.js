import mongoose from "mongoose";

const helpCardsSchema = new mongoose.Schema({
    title : {
        type: String, 
        required : true, 
        unique : true
    },
    description : {
        type : String, 
        required: true
    },
})

const Card = mongoose.model('Card', helpCardsSchema);

export default Card;
