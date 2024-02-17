import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
const Header = () => {
 const navigate=useNavigate();
 
 const savedata =(event)=>{
    event.preventDefault();
    navigate("/Login")
 }
  return (
    <div className='header'>
        <div className='headerTitles'>
        <span className='headerTitlesSm'>React&node</span>
            <span className='headerTitlesLg'>BLOG</span>
            <button className='blogButton' onClick={savedata} >Create Blog</button>
        </div>
       <img
       className='headerImg'
       src="https://img.freepik.com/free-vector/bokeh-defocused-background_23-2148497833.jpg?w=740&t=st=1704605732~exp=1704606332~hmac=54c5c604da58ed16e048cb61ee5796e56011522eaaf73469b560081f2a03f949"
       alt=''/>
      
    </div>
  )
}

export default Header
