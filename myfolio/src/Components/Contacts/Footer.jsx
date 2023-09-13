import React from 'react'
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";
import css from './Footer.module.scss'
import { Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <section className={`paddings flexCenter  ${css.container}` } id="Hero">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth   ${css.wrap}`}
      >
        <motion.div >
          <motion.span variants={fadeIn("right", "tween", 0.2, 1)}>
                <img src="./assets/facebook-icon.png" alt="" width={90} />
          </motion.span>
          <motion.span variants={fadeIn("left", "tween", 0.4, 2)}>
          <img src="./assets/instagram.png" alt=""  width={90}/>
          </motion.span>
          <motion.span variants={fadeIn("left", "tween", 0.6, 3)}>
          <img src="./assets/twitter.png" alt="" width={90}/>
          </motion.span>
          <motion.span variants={fadeIn("left", "tween", 0.7, 4)}>
          <img src="./assets/youtube.png" alt="" width={90}/>
          </motion.span>
         
        </motion.div>
        
    </motion.div>
   
    


    </section>
  )
}

export default Footer
