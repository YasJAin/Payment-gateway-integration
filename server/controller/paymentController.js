import { instance } from "../server.js";
import crypto from "crypto";
import {Payment} from "../models/paymentModel.js";
export const checkout = async(req,res)=>{
    const options = {
        amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    const order = await instance.orders.create(options);
    res.status(200).json({
        success: true,
        order,
    });
};

export const paymentVerification = async(req,res)=>{
    const {razorpay_order_id, razorpay_payment_id,razorpay_signature} = req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto.createHmac('sha256',process.env.RAZOR_PAY_SECRET)
                                    .update(body.toString())
                                    .digest('hex');
    
    const isAuthentic = expectedSignature === razorpay_signature;
    if(isAuthentic){
        await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        })

        res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
    }
    else{
        res.status(400).json({
            success: false,
        });
    }
};