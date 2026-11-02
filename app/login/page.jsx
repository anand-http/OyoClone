"use client"

import { useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Header from "../components/header";
import { AppContext } from "../context/context";

const Login = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false);

    const [signup, setSignup] = useState(false);

    const { updateAuth } = useContext(AppContext);

    //register
    const [name, setName] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [resigterPassword, setRegisterPassword] = useState("")
    //login
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleLogin = async () => {

        setLoading(true)
        try {
            const res = await axios.post('/api/user/login', {
                email,
                password
            });


            if (res?.data) {
                Cookies.set("user", res.data.token);
                alert(res.data.msg);
                if (res.data.token) {
                    updateAuth(true);
                }
                router.back()
            }

            setEmail("");
            setPassword("");
            console.log(res.data);


        } catch (error) {
            console.log("error while login ", error)
        }
        finally {
            setLoading(false);
        }


    }

    const handleSignup = async () => {
        setLoading(true)
        try {
            const res = await axios.post('/api/user/register', {
                name, email: registerEmail, password: resigterPassword
            });

            setName("")
            setRegisterEmail("")
            setRegisterPassword("")
            console.log(res.data);
            if (res?.data) {
                Cookies.set("user", res.data.token);
                alert(res.data.msg);
                if (res.data.token) {
                    updateAuth(true);
                }
                router.back();
            }

        } catch (error) {
            console.log("error while signup", error.res);

        }
        finally {
            setLoading(false);
        }
    }

    return (

        <div className="mt-20 bg-gray-300 flex flex-col lg:flex-row items-center justify-around w-full h-screen bg-loginBackground bg-no-repeat bg-cover p-5 sm:p-0 lg:p-5">
            <Header />

            <div className="w-full sm:w-1/2 lg:w-1/3 h-auto bg-white">

                <div className="py-2 p-3 sm:px-8 font-bold text-white bg-gradient-to-r from-red-600 to-red-700">Signup & Get Rs500 OYO Money</div>

                <div className=" p-3 sm:p-8 ">

                    <h1 className="font-bold text-3xl mb-2 sm:mb-10">Login / Signup</h1>

                    <div>
                        {
                            signup ?
                                <div className="flex flex-col gap-y-3">
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="outline-none border border-gray-300 p-2 mt-1 w-full" placeholder="Enter your name" />
                                    <input type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} className="outline-none border border-gray-300 p-2 mt-1 w-full" placeholder="Enter your email" />
                                    <input type="password" value={resigterPassword} onChange={(e) => setRegisterPassword(e.target.value)} className="outline-none border border-gray-300 p-2 mt-1 w-full" placeholder="set your password" />

                                    <button disabled={loading} onClick={handleSignup} className="px-8 bg-green-600 py-3 text-white  mt-2 rounded-lg font-bold">{loading ? "Loading..." : "Submit"}</button>
                                </div>
                                :

                                <div className="flex flex-col gap-y-3">
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className=" w-full outline-none border border-gray-300 p-2 mt-1" placeholder="Enter your email" />
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="outline-none border border-gray-300 p-2 mt-1 w-full" placeholder="Enter your password" />
                                    <button disabled={loading} onClick={handleLogin} className="px-8 bg-green-600 py-3 text-white  mt-2 rounded-lg font-bold">{loading ? "Loading..." : "Login"}</button>

                                </div>

                        }


                        <div className="mt-5">
                            <p className="font-bold mt-2">{signup ? "Already have an account?" : "Don't have account? Let's Singup ?"}  <span className="text-red-500 cursor-pointer" onClick={() => setSignup(!signup)}>Click here</span></p>
                        </div>
                    </div>


                </div>



                <div className="py-3 px-3 sm:px-8">

                    <div className=" text-sm w-21 font-bold left-8 bottom-20 mb-3 ">
                        <p> or sign in as</p>
                    </div>

                    <div className="border-t flex lg:py-8">
                        <h1 className="font-bold mr-12">Travel Agent</h1>
                        <h1 className="font-bold">Corporate</h1>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Login;