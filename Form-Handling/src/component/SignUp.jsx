import React from 'react'
import { useState } from 'react'
const SignUp = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [formData, setformData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [totalData, settotalData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        settotalData([...totalData,formData]);
        console.log(formData);
        console.log(totalData);
        


        setformData({
            name: "",
            email: "",
            password: ""
        })

    }
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="border flex flex-col gap-4 px-5 py-4 w-full max-w-md rounded-lg shadow-md">

                <div>
                    <h1 className="text-2xl font-bold mt-4">
                        Welcome to our app
                    </h1>
                    <p className="text-sm text-zinc-600">
                        Create a free account
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold">Username</label>
                        <input
                            type="text"
                            value={formData.name}
                            name='name'
                            placeholder="Username"
                            className="border w-full p-2 rounded-lg"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1 mt-5">
                        <label className="font-semibold">E-mail</label>
                        <input
                            type="email"
                            value={formData.email}
                            name='email'
                            placeholder="E-mail"
                            className="border w-full p-2 rounded-lg"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1 mt-5">
                        <label className="font-semibold">Password</label>
                        <input
                            type="password"
                            value={formData.password}
                            name='password'
                            placeholder="************"
                            className="border w-full p-2 rounded-lg"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <input
                            type="submit"
                            value="Submit"
                            className="bg-[#82E9FF] mt-5 font-bold text-lg cursor-pointer mb-5 w-[90%] py-1 rounded-sm hover:bg-[#48bcd6] "
                        />
                    </div>
                </form>

                <div className='flex items-center'>
                    <h1>Don't have a account?</h1>
                    <a className='text-sm text-[#82E9FF] underline font-bold' href="#">Signup</a>
                </div>
            </div>
        </div>
    )
}

export default SignUp
