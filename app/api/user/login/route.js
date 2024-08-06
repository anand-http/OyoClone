import { connectDb } from "@/app/config/db";
import { NextResponse } from "next/server";
import User from "@/app/model/userSchema";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const POST = async (request) => {
    await connectDb();

    const body = await request.json();

    const { email, password } = body;

    if (!email || !password) {
        return NextResponse.json({
            msg: "Email and password are required",
            status: 400
        })
    }

    try {

        //find user
        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({
                msg: "Invalid email or password",
                status: 401
            })
        }

        const matchPassword = await bcrypt.compare(password, user.password);

        if (!matchPassword) {
            return NextResponse.json({
                msg: "Invalid email or password",
                status: 401
            })
        }

        const token = jwt.sign({ token: user._id }, "jaishreeram", { expiresIn: "30d" })

        return NextResponse.json({
            msg: "Login successfull",
            token,
            status: 200
        })

    } catch (err) {
        console.error("Error logging in user ", err)

        return NextResponse.json({
            err: "Failed to log in",
            status: 500
        })

    }

}