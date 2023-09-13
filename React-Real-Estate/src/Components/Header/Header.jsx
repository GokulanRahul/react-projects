import React, { useState } from "react";
import "./Header.css";
import {BiMenuAltRight} from "react-icons/bi"


const Header = () => {
  const [menuOpened,setmenuOpened]=useState(false)

  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%"}
    }
    }
  
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="/logo.png" alt="logo" width={100} />
       <div className=" flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          {/*  <Link to='/'>Home</Link>
          <Link to='/Resi'><a href="">Residencies</a></Link>
          <Link to='/Value'><a href="">Our Value</a></Link>
          <Link to='/Contact'><a href="">Contact us</a></Link>
          <Link to='/GetStarted'> <a href="">Get Started</a></Link>
          <Link to='/Contact'><button className="button">
            <a href="">Contact</a>
          </button></Link> */}

           <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button> 
        </div>
        <div className="menu-icon" onClick={()=>setmenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30}/>
        </div>
      </div>
    </section>
  );
  }

export default Header;
