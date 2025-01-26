import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
       const res= fetch('https://api.github.com/users/roshan8319')
       .then(response => response.json())
       .then(data =>{
            setData(data)
       })
       

    })
  return (
    <div>
       <h1 className='bg-gray-500 text-white p-4 m-4'>github:{data.followers}</h1>
    </div>
  )
}

export default Github
