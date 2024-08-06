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

        const { searchParams } = new URL(request.url);
        const city = searchParams.get('city');

        const findHotels = await Hotels.find({ location: city });

        if (findHotels.length > 0) {
            return NextResponse.json({
                msg: "ok 200",
                hotels: findHotels
            })
        }
        else {
            const allHotels = await Hotels.find({});

            return NextResponse.json({
                msg: "ok 200",
                hotels: allHotels

            })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            err: "error while find hotels",
            error
        })
    }
}
