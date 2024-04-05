import './App.css'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { useState, useEffect } from 'react'
import { Footer, Header } from './components'
import { logout, login } from './store/authSlice'


function App() {
const [loading, setLoading] = useState(true)
const dispatch = useDispatch()

useEffect(()=>{
    authService.getcurrentUser()
    .then((userData)=>{
      if (userData){
        dispatch(login({userData})) 
      } else {
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))

}, [])
  

  return !loading ? (
    <div className="min-h-screen min-w-screen p-0 m-0 flex-wrap content-betwen bg-gray-400">
      <div className="w-full block">
        <Header/>
        <main>
          <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  ) : (null)
 
}

export default App
