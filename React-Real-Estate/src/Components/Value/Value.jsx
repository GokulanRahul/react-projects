import React from "react";
import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemButton,
} from "react-accessible-accordion";
import "./Value.css";
import data from '../../utils/accordion'
import { MdOutlineArrowDropDown } from "react-icons/md";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="innerWidth paddings flexCenter v-container">
        <div className="v-left">
          <div className="img-container">
            <img src="value.png" alt="" />
          </div>
        </div>
        <Accordion
        className="accordian"
        allowMultipleExpanded={false}
        preExpanded={[0]}
        >
          {
            data.map((item,i)=>
            {
              return(
                <AccordionItem className="accordionItem" key={i} uuid={i}>
                  <AccordionItemHeading>
                     <AccordionItemButton className="accordionButton flexCenter">
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20}/>
                      </div>
                      </AccordionItemButton> 
                  </AccordionItemHeading>
                    <AccordionItemPanel className="accordionPanel">
                      <p className="secondaryText">
                        {item.detail}
                      </p>
                    </AccordionItemPanel>
                </AccordionItem>
              )
            })
          }
            
        </Accordion>
      </div>
    </section>
  );
};

export default Value;
