"use client";
import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();
import Cookies from 'js-cookie'


export function AppProvider({ children }) {
    const [auth, setAuth] = useState();

    useEffect(() => {
        const cookie = Cookies.get("user");

        setAuth(!!cookie);

    }, [])

    const updateAuth = (status)=>{
        setAuth(status);
    }

    

    return (
        <AppContext.Provider value={{ auth,updateAuth }}>
            {children}
        </AppContext.Provider>
    );
}
