import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br />
              Most Suitable <br /> Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flexCenter search-box">
            <HiLocationMarker color="var(--blue) " size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

        <div className="flexCenter stats">
           <div className="flexColCenter stat">
           <span>
                <CountUp start={100} end={400} duration={5}></CountUp>
                <span>+</span>
            </span>
            
            <span className="secondaryText">Premium Houses</span>
           </div>
           <div className="flexColCenter stat">
           <span>
                <CountUp  end={56} duration={5}></CountUp>
                <span>+</span>
            </span>
            
            <span className="secondaryText"> Buying</span>
           </div>
           <div className="flexColCenter stat">
           <span>
                <CountUp  end={25} duration={5}></CountUp>
                <span>+</span>
            </span>
            
            <span className="secondaryText">Awards</span>
           </div>
        </div>
    </div>

        {/* right Side */}
        <div className="flexCenter hero-right">
          <div className="img-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
