import React from "react";

import { Link } from 'react-router-dom';

function ErrorPage() {
  const bgColor="#F4F5F7";
  document.body.style.backgroundColor = bgColor;

  return (
    <body >
    
    <div className='main-container'>
      <h1 className='head-2'>Oh !...Something went wrong</h1>
      <p>Currently there is no match for you</p>
      <div >
        <img src='Mask group.png' alt='img'/>
      </div>

      <Link to='/help' className='link' ><button className='btn'>+ Get Help</button></Link>
    </div>
    </body>
    
  )
}

export default ErrorPage
