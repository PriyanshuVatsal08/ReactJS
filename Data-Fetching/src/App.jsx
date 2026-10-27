import React from 'react'
import { useState, useEffect } from 'react';

const App = () => {
  const [api_data, setApi_data] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [type_data, setType_data] = useState("");

  useEffect(() => {
    const apiFetch = async () => {
      try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!responce.ok) {
          throw new error("Failed to fetch data");
        }

        const data = await responce.json();
        setApi_data(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    apiFetch()

  }, []);


  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error: {error}</h1>

  return (
    <div className='border-2 flex flex-col justify-center items-center gap-5 w-fit p-5 rounded-2xl'>
      <div>
        <h1 className='font-semibold text-2xl'>User List</h1>

        {api_data.map((item) => (
          <div key={item.id}>
            <h3>Name:- {item.name}</h3>
            <p>E-mail:- {item.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App