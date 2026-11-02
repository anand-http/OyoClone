import { connectDb } from "@/app/config/db"
import { NextResponse } from "next/server";
import Hotels from "@/app/model/hotels";


export const GET = async (request, { params }) => {

    await connectDb();

    try {
        const id = params.id;
        console.log("params ", id);

        const findHotel = await Hotels.findById(id);

        if (findHotel) {
            return NextResponse.json({
                msg: "ok 200",
                hotel: findHotel
            }, { status: 200 });
        } else {
            return NextResponse.json({
                msg: "Hotel not found",
            }, { status: 404 });
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            err: "error while find hotels",
            error: error.message
        })
    }
}
