import React from "react";
import "./Projects.css";

const activity1 = require("../../images/Activity1.JPG");
const activity2 = require("../../images/Activity2.JPG");
const activity3 = require("../../images/Activity3.JPG");

function ProjectDetails({ data }) {
  return (
    <div className="projDetails">
      <h2 className="projDetails_title">{data.title}</h2>
      <img className="projDetails_img" src={data.images[0]} alt="" />
      <img className="projDetails_img" src={data.images[1]} alt="" />
      <img className="projDetails_img" src={data.images[2]} alt="" />
      <p>{data.description}</p>
      <div className="projDetails_linkdiv">
        <a href={data.link} className="projDetails_link" target="_blank">
          Project Link
        </a>
      </div>
    </div>
  );
}

export default ProjectDetails;
