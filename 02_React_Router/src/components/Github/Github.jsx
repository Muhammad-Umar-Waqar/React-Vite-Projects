import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
const data = useLoaderData()


//     const [data, setData] = useState([])
//     useEffect(()=>{
// fetch("https://api.github.com/users/hiteshchoudhary")
// .then((res)=>res.json())
// .then(data => {
//   console.log(data)
//   setData(data)
// })
//     }, [])


console.log(data)
  return (
    <>
    <div className='text-center m-4 bg-white text-white p-4 text-3xl'>
    
      <h1 className='text-center bg-gray-600'>{data.name}</h1>
      
    
    <img  style={{"height": 300, padding: 5 }} className='m-auto rounded-xl' src={data.avatar_url} alt="" />
    <div className='bg-gray-600'>
    Github Followers: {data.followers}
    </div>
    </div>
 
    </>
  )
}

export default Github
export const githubInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/Muhammad-Umar-Waqar')
  return response.json()
}