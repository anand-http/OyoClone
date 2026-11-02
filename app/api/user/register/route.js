import { connectDb } from "@/app/config/db";
import User from "@/app/model/userSchema.js";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const POST = async (request) => {

    await connectDb();

    const body = await request.json();

    const { name, email, password } = body;

    //validate user

    if (!name || !email || !password) {
        return NextResponse.json({
            msg: "Name, email and password are required",
            status: 400
        })
    }


    try {


        //check user exist or not 
        const existEmail = await User.findOne({ email });

        if (existEmail) {
            return NextResponse.json({
                msg: "User already exist",
                status: 400
            })
        }


        //hash the password
        const hashedpwd = await bcrypt.hash(password, 10);



        // Register user in Db
        const newUser = new User({
            name, email, password: hashedpwd
        })

        const result = await newUser.save();

        const token = jwt.sign({ token: result._id }, "jaishreeram", { expiresIn: "30d" })

        return NextResponse.json({
            msg: 'User registerd successfully',
            status: 200,
            token,
            user: result
        })

    } catch (err) {
        console.log("error registering user: ", err)

        return NextResponse.json({
            err: "failed to register user",
            status: 500
        })
    }
}