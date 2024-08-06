"use client";
import { useContext, useEffect, useState } from "react";
import Hotel from "../components/hotel";
import Header from "../components/header";
import Filter from "../components/filters";
import axios from "axios";
import SkeletonLoader from "../components/skeletonLoader";
import { AppContext } from "../context/context";


const Hotels = () => {
  const [price, setPrice] = useState(3000);
  const [checked, setChecked] = useState([]);
  const [hotelsDetail, setHotelDetail] = useState();
  const [loading, setLoading] = useState(false);

  const { city } = useContext(AppContext);


  useEffect(() => {

    const handleHotelDetail = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/hotels?city=${city}`);
        const hotel = res.data.findHotels;
        setHotelDetail(hotel);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
      finally {
        setLoading(false);
      }

    }
    handleHotelDetail();
  }, [])


  //handle the filter by price
  const handlePriceFilter = async () => {
    try {
      const res = await axios.get(`/api/price-filter?price=${price}`);

      const data = res.data.findHotels;
      setHotelDetail(data);

    } catch (error) {
      console.log(error);
    }
  }


  //handle filter by amenities

  const handleAmenitiesFilter = async () => {

    try {
      const { data } = await axios.get(`/api/filter`, {
        params: {
          filter: checked
        },
        paramsSerializer: params => {
          return Object.entries(params).map(([key, value]) => {
            if (Array.isArray(value)) {
              return value.map(v => `${key}=${encodeURIComponent(v)}`).join('&');
            }
            return `${key}=${encodeURIComponent(value)}`;
          }).join('&');

        }
      });


      const list = data.findHotels;
      setHotelDetail(list);



    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    if (checked) {
      handleAmenitiesFilter();
    }
  }, [checked])


  return (
    <div>
      <Header />
      <div className="flex justify-between h-screen pt-16 flex-col xl:flex-row">

        <div className="xl:w-1/4 xl:max-h-screen">
          <Filter
            checked={checked} setChecked={setChecked} handleAmenitiesFilter={handleAmenitiesFilter}
            price={price} setPrice={setPrice} handlePriceFilter={handlePriceFilter} />
        </div>

        <div className="w-full p-2 py-10 sm:p-10 overflow-y-scroll">
          {
            loading ? <SkeletonLoader /> :
              hotelsDetail && hotelsDetail.map((item, i) => (
                <Hotel
                  key={i}
                  name={item?.name}
                  location={item?.location}
                  price={item?.price}
                  id={item?._id}
                  src={item?.gallary}
                  amenities={item?.amenities}
                />
              ))}
        </div>
      </div>
    </div>

  )

}

export default Hotels;