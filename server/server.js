import { app } from "./app.js";
import Razorpay  from "razorpay";
import { connectDB } from "./config/database.js";

connectDB();

export const instance = new Razorpay({
    key_id: process.env.RAZOR_PAY_KEY,
    key_secret: process.env.RAZOR_PAY_SECRET ,
});

app.listen(process.env.PORT, () =>
    console.log(`Server is working on port ${process.env.PORT}`)
);
