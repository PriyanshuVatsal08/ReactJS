import React from 'react'
import { useState } from 'react'
const App = () => {
  const [completeData, setCompleteData] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    hobbies: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setCompleteData([...completeData, formData]);

    console.log(completeData);


    setFormData({
      name: "",
      email: "",
      password: "",
      gender: "",
      hobbies: []
    });
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if(type === "checkbox"){
      setFormData({...formData,
        hobbies: checked
        ? [...formData.hobbies,value]
        :formData.hobbies.filter((item)= item!==value)}
      )
    }else{
      setFormData({...formData,[name]:value})
    }
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-4'>
      <div className='border border-gray-200 bg-white w-full max-w-md p-6 rounded-xl shadow-sm'>

        <h1 className='text-2xl font-bold mb-1'>Create Account</h1>
        <p className='text-sm text-gray-500 mb-6'>Enter your details below</p>

        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>

            <div className='flex flex-col gap-1'>
              <label className='font-medium text-sm'>Name</label>
              <input
                type="text"
                name='name'
                value={formData.name}
                placeholder='Enter your name'
                className='border border-gray-300 w-full py-2 px-3 rounded-lg outline-none focus:border-gray-500'
                required
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label className='font-medium text-sm'>E-mail</label>
              <input
                type="email"
                name='email'
                value={formData.email}
                placeholder='Enter your email'
                className='border border-gray-300 w-full py-2 px-3 rounded-lg outline-none focus:border-gray-500'
                required
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label className='font-medium text-sm'>Password</label>
              <input
                type="password"
                name='password'
                value={formData.password}
                placeholder='Enter your password'
                className='border border-gray-300 w-full py-2 px-3 rounded-lg outline-none focus:border-gray-500'
                required
                onChange={handleChange}
              />
            </div>

          </div>

          <div className='mt-5'>
            <label className='font-medium text-sm block mb-2'>Gender</label>

            <div className='flex items-center gap-5'>
              <label className='flex items-center gap-2 text-sm'>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                Male
              </label>

              <label className='flex items-center gap-2 text-sm'>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                Female
              </label>

              <label className='flex items-center gap-2 text-sm'>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </div>

          <div className='mt-5'>
            <label className='font-medium text-sm block mb-2'>Hobbies</label>

            <div className='flex flex-col gap-2'>
              <label className='flex items-center gap-2 text-sm'>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="coding"
                  checked={formData.hobbies.includes("coding")}
                  onChange={handleChange}
                />
                Coding
              </label>

              <label className='flex items-center gap-2 text-sm'>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="gaming"
                  checked={formData.hobbies.includes("gaming")}
                  onChange={handleChange}
                />
                Gaming
              </label>

              <label className='flex items-center gap-2 text-sm'>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="music"
                  checked={formData.hobbies.includes("music")}
                  onChange={handleChange}
                />
                Music
              </label>
            </div>
          </div>

          <button
            type="submit"
            className='w-full mt-6 bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition'
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  )
}

export default App