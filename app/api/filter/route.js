import { NextResponse } from "next/server";
import Hotels from "@/app/model/hotels.js";
import { connectDb } from "@/app/config/db"


//Get hotels by filter of ameneties

export const GET = async (request) => {

    await connectDb();

    try {
        const { searchParams } = new URL(request.url);
        const filter = searchParams.getAll('filter');

        let findHotels;
        if (filter.length > 0) {
            findHotels = await Hotels.find({ "amenities.name": { $in: filter } });
        } else {
            findHotels = await Hotels.find({});
        }

        return NextResponse.json({
            msg: "All hotels by amenities filter",
            findHotels
        })

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            err: "error while finding hotels by filter",
            error
        })

    }
}