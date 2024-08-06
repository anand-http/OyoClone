"use client";
import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();
import Cookies from 'js-cookie'


export function AppProvider({ children }) {
    const [city, setCity] = useState();
    const [auth, setAuth] = useState();

    useEffect(() => {
        const cookie = Cookies.get("user");

        setAuth(!!cookie);

    }, [])

    const updateAuth = (status)=>{
        setAuth(status);
    }

    

    return (
        <AppContext.Provider value={{ city, setCity, auth,updateAuth }}>
            {children}
        </AppContext.Provider>
    );
}
