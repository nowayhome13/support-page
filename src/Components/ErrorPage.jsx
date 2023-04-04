import React from "react";
import "../Stylesheets/Error.css";
import { Link } from 'react-router-dom';

function ErrorPage() {
  // const bgColor="#F4F5F7";
  // document.body.style.backgroundColor = bgColor;

  return (
    <main>
  
        <h1 className='heading'>Oh !...Something went wrong</h1>
        <p>Currently there is no match for you</p>
        <img src='Mask group.png' alt='img'/>
        <Link to='/help' className='link' ><button className='get-help-btn'>+ Get Help</button></Link>

    </main>
    
  )
}

export default ErrorPage
