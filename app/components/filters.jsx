import React from "react";

const Filter = ({ price, setPrice, handlePriceFilter, checked, setChecked }) => {

    const list = [
        "Free Wifi",
        "AC",
        "Parking zone",
        "Reception",
        "Power backup"
    ]

    const rangeHandle = () => {
        handlePriceFilter();
    }

    const checkboxHandle = (e) => {
        const value = e.target.value;

        if (e.target.checked) {
            setChecked(prevChecked => [...prevChecked, value]);
            console.log("checked in filter", checked);
        } else {
            setChecked(prevChecked => prevChecked.filter(item => item !== value));
        }
    };

    return (
        <div className="px-3 pt-10 xl:pt-20 flex flex-col items-center justify-center">

            <div className="flex items-center gap-2 ">
                <label htmlFor="volume" className="font-semibold">Price:  </label>

                <input type="range" id="price" name="price" min="1000" defaultValue={price ? price : 1000} max="3000" onMouseUp={rangeHandle} onChange={(e) => { setPrice(e.target.value) }} />
                <p>₹{price}</p>
            </div>

            <div className="mt-6 ">
                <h3 className="font-semibold ">Filter by Facilities:</h3>

                <div className="lg:flex block xl:block">
                    {
                        list.map((item, i) => <p key={i} className="grid grid-cols-4 my-3 gap-2">
                            <label key={i} htmlFor="checkbox" className="col-span-2">{item}</label>
                            <input
                                onChange={checkboxHandle}
                                type="checkbox" name="checkbox" value={item} className="w-5 h-5 ml-3 col-span-1" />
                        </p>)
                    }

                </div>

            </div>
        </div>
    )
}

export default Filter