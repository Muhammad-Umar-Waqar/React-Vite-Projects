import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user} = useContext(UserContext)
  if(!user) return <div  className="block w-[50%]  my-5 mx-auto rounded-md text-black px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm  hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Please Login</div>
  return <div className="block w-[50%]  my-5 mx-auto rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Welcome {user.username}</div>
}

export default Profile
