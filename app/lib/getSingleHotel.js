import axios from 'axios';


export async function getSingleHotel    (id) {
    try {
        const res = await axios.get(`/api/single-hotel/${id}`);
        return res.data.hotel;
    } catch (error) {
        console.error("Error fetching hotels:", error);
        return [];
    }
}