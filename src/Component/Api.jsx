import React,{useEffect, useState} from 'react'

import { NavLink } from 'react-router-dom'


const Api = () => {
  const[articles,setArticles]=useState([])
 const apiGet=()=>{
    fetch("https://randomuser.me/api/?results=15")
    .then((res)=>res.json())
    .then((data)=>{
      localStorage.setItem('posts',JSON.stringify(data))
      setArticles(data)
      console.log(data)
      console.log("Data fetch successfully")
      
    })
 }

 useEffect(()=>{
  apiGet()
 },[])
    
   
  return (
    <div>
      
          <h1>Welcome to Refactor Page!</h1>
                  <button onClick={apiGet}>Fetch Users</button>
                  &nbsp; &nbsp; &nbsp;
                  <NavLink to="/DeleteUser">
                  <button>Delete Users</button></NavLink>
                  &nbsp; &nbsp; &nbsp; 
                  <NavLink to="/DetailUser">
                  <button>User Details</button></NavLink>
    </div>
  )
}

export default Api;