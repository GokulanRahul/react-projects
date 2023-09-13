import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="c-container innerWidth flexCenter paddings">
        <div className="c-left flexColStart">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact</span>
          <span className="secondaryText">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            illo voluptatem debitis consequuntur sequi!facilis fugiat laudantium
            mollitia.
          </span>
          <div className="contactModes flexColStart">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <MdCall size={30} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">00000 00000</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* --------------------------- */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <BsFillChatDotsFill size={30} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">00000 00000</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            {/* ----------------------------------- */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <MdCall size={30} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">00000 00000</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Now</div>
              </div>
              {/* --------------------------- */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="icon flexCenter">
                    <MdCall size={30} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">00000 00000</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="img-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
