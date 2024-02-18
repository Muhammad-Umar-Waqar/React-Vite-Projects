import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication = true}) {
const navigate = useNavigate()
const [loader, setLoader] = useState(true)
const authStatus = useSelector(state => state.auth.status)

useEffect(()=>{

    // Todo : Make it more easy
    

    // T && F != T
    // T && T
    // T


    if (authentication && authStatus !== authentication){
        navigate("/login")
    }
    else if (!authentication && authStatus !== authentication){
        navigate("/")
    }
// OR
    // if (authStatus === true) {
    //     navigate("/")
    // } 
    // else if( authStatus === false ){
    //     navigate("/login")
    // }
// OR
    // let authValue = authStatus=== true? navigate("/") : navigate("/login")

    setLoader(false)
},[authStatus, navigate, authentication])

return loader ? <h1>loading</h1> : <>{children}</>
}

