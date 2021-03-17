import React from "react";
import  "./JobItem.styles.scss";



const JobItem = ({job,setSelectedJob}) => {
    const {jobTitle,jobDescription,jobtype,city,companyName, postedDate, duration} = job
    return (
        <div className= "jobItem">
            <h3> {jobTitle}</h3>
            <div className="JobDuration">
                <img src="https://img.icons8.com/fluent/40/000000/time-card.png"/>
                <h6>{ duration} week(s)</h6>
            </div>
            <div  style={{ color: "black", fontSize: "1.2rem"}}>
                <p  style={{fontWeight: "bold", }}>{companyName}</p>
                <p className="date"> {postedDate}</p>
            </div>
            <p>{jobDescription}</p>
            <div className="location-time">
                <div className= "location">
                    <img src="https://img.icons8.com/plasticine/40/000000/worldwide-location.png"/>
                    <p>{city}</p>
                </div>
                <div className = "time">
                    <img src="https://img.icons8.com/bubbles/40/000000/id-short-hair-girl.png"/>
                    <p> {jobtype}</p>
                </div>         
            </div>
            <div className="buttonContainer_1943699">
                <button onClick={()=>setSelectedJob(job)}>
                    More Details
                </button>
            </div>
        </div>
    )
}


export default JobItem;