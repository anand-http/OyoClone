import { NextResponse } from "next/server";
import Hotels from "@/app/model/hotels.js";
import { connectDb } from "@/app/config/db"


//Get hotels by filter of Price

export const GET = async (request) => {

    await connectDb();

    try {
        // const price = await request.json();

        const { searchParams } = new URL(request.url);
        const price = searchParams.get('price');
        console.log(price);

        const findHotels = await Hotels.find({ price: { $lte: price } })

        return NextResponse.json({
            msg:"All Hotels by price filter",
            findHotels
        })

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            err: "Error while finding hotels by price filter",
            error
        })

    }
}