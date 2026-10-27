import React from 'react'
import { useState } from 'react'
const UseState = () => {
    const [counter, setCounter] = useState(0);

    const addConter = () => {
        if (counter >= 10) {
            alert("Not greater than 10");
        } else {
            setCounter(counter + 1);
        }
    };

    const minusCounter = () => {
        if (counter <= 0) {
            alert("Not less than 0");
        } else {
            setCounter(counter - 1);
        }
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center border w-fit p-5 gap-5 rounded-lg">
                <h1 className="text-3xl">{counter}</h1>

                <div className="flex gap-x-3">
                    <button className="bg-green-400 text-lg font-semibold text-white px-2 rounded-sm cursor-pointer hover:bg-green-700" onClick={addConter}>
                        Add
                    </button>

                    <button className="bg-red-400 text-lg font-semibold text-white px-2 rounded-sm cursor-pointer hover:bg-red-700" onClick={minusCounter}>
                        Minus
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseState