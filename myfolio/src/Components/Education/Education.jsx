import React from "react";
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from 'react-icons/fa'
import { IoMdSchool } from 'react-icons/io'
import {BiSolidSchool} from 'react-icons/bi'


function Education() {
    return (
        <div  id="Education" style={{marginTop:"5rem"}}>
           

            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2023"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<IoMdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">
                    Courseinn Academy
                    </h3>
                    <p> Coaching Center</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2019 - 2022"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<BiSolidSchool />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Apollo Art's and Science  College
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor's Degree
                    </h4>

                    <p>Bachelor of Computer Application</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2018 - 2019"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<FaSchool />}
                >
                    <h3 className="vertical-timeline-element-title">
                        R.C Hr Sec School
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        12th
                    </h4>

                    <p>Computer Maths</p>
                </VerticalTimelineElement>




            </VerticalTimeline>
        </div>
    );
}

export default Education;