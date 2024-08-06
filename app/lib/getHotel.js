import axios from 'axios';
import { useContext } from 'react';
import { AppContext } from '../context/context';

// const { city } = useContext(AppContext);


export async function getHotels(city = "All city") {
    try {
        const res = await axios.get(`/api/hotels?city=${city}`);
        return res.data.hotels;
    } catch (error) {
        console.error("Error fetching hotels:", error);
        return [];
    }
}