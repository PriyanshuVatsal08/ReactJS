import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        document.title = counter
    }, [counter])

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center border w-fit p-5 gap-5 rounded-lg">
                <h1 className="text-3xl">{counter}</h1>

                <div className="flex gap-x-3">
                    <button className="bg-green-400 text-lg font-semibold text-white px-2 rounded-sm cursor-pointer hover:bg-green-700" onClick={()=>setCounter(counter+1)}>
                        Add
                    </button>

                    <button className="bg-red-400 text-lg font-semibold text-white px-2 rounded-sm cursor-pointer hover:bg-red-700" onClick={()=>setCounter(counter-1)}>
                        Minus
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseEffect