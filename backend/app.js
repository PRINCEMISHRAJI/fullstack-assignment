import mongoose from "mongoose";
import helpCardsRoutes from "./routes/helpCards.js"
import bodyParser from "body-parser";
import express from "express"
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

const allowedOrigins = ['https://help-center-102o.onrender.com'];
app.use(cors({
  origin: allowedOrigins,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));


app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB connected"))
.catch((error)=>console.log(error));

app.use('/cards', helpCardsRoutes);

app.get('/ping', (req, res)=>{
    res.send("Server is running");
} )


app.listen(PORT, ()=> {
    console.log("Server is listening at Port 3000");
    
});
