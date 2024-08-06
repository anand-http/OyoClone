import { connectDb } from "@/app/config/db";
import { NextResponse } from "next/server";
import Hotels from "@/app/model/hotels";

import Razorpay from "razorpay";

import shortid from "shortid";

const razorpay = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET
});


export const POST = async (request) => {
    await connectDb();

    const ID = await request.json();
    const { id } = ID;

    const hotel = await Hotels.findOne({ _id: id });

    const price = hotel?.price;

    const options = {
        amount: price * 100,
        currency: "INR",
        receipt: shortid.generate(),
        payment_capture: 1
    }

    try {
        const result = await razorpay.orders.create(options);
        return NextResponse.json({
            id: result.id,
            currency: result.currency,
            amount: result.amount
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            msg: "Error while payment",
            error: error
        })

    }

}