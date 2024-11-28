import { connectDb } from "@/app/config/db"
import { NextResponse } from "next/server";
import Hotels from "@/app/model/hotels";


export const GET = async (request) => {

    await connectDb();


    // const body = await request.json();

    // const hotelToInsert = [];
    // // console.log(body);


    // try {

    //     for (let hotel of body) {

    //         const { name, description, gallary, price, amenities, location } = hotel;

    //         const newHotel = new Hotels({
    //             name, description, gallary, price, amenities, location
    //         })

    //         hotelToInsert.push(newHotel);
    //     }

    //     const result = await Hotels.insertMany(hotelToInsert);


    //     return NextResponse.json({
    //         msg: `${result.length} hotels save`,
    //         result
    //     })

    // } catch (error) {
    //     console.log(error);
    //     return NextResponse.json({ msg: "faild to insert " })
    // }


    try {

        const findHotels = await Hotels.find({});

        return NextResponse.json({
            msg: findHotels.length > 0 ? " Hotels found " : "No hotels found",

            findHotels,
        });

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            err: "Error while finding hotels",
            error: error.message,
        })
    }
}
