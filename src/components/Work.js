import React from "react";
import "./WorkCardStyles.css";
import WorkCardData from './WorkCardData'
import WorkCard from "./WorkCard";
// import projecOne from "../assets/project-1.jpg";
// import { NavLink } from "react-router-dom";

const Work = (props) => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val,ind)=>{
            return(
                <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}/>
            )
        })}
      </div>
    </div>
  );
};

export default Work;
