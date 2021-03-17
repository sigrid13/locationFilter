
import React, { useState,useEffect } from 'react';
import "./JobDetails.styles.scss";
// import BlankView from '../BlankView/BlankView.component'
import ConfirmationInput from '../ConfirmationInput/ConfirmationInput.component';
import { ShowToast } from '../../../../../assets/utilities';
import BlankView from '../../../../../components/BlankView/BlankView.component';



const JobDetails = (props) => {
    const { user, addJobToUser, selectedJob } = props
    const [showPopup, setShowPopup] = useState(false);
    let jobTitle = ""
    let jobDescription =  ""
    let jobtype = ""
    let city = ""
    let companyName = "";
    let jobId = "";
    let postedDate = "";

    const apply = () => {
        
        setShowPopup(false)
        addJobToUser({...selectedJob, applicationDate: new Date().toString().split(" ").slice(0, 4).join(' ')})
        ShowToast("success", `You have succesfully applied for this job`)
    }


    if (props.selectedJob) {
        console.log("sj",selectedJob)
        jobTitle =  selectedJob.jobTitle
        jobDescription  = selectedJob.jobDescription
        jobtype = selectedJob.jobtype
        city = selectedJob.city 
        companyName  = selectedJob.companyName 
        jobId = selectedJob.jobId 
        postedDate = selectedJob.postedDate 
    }
    //const currentUser = authentication.getCurrentUser();
    //const [profile, setProfileData] = useState([])


    // console.log("DATE", postedDate.split(" ").slice(0, 4).join(" "))
    console.log("DATE", typeof postedDate, postedDate)
    // const {jobTitle,jobDescription,jobtype,city} = props.selectedJob
    return (
        <div className="JobDetailsContainer">
            {showPopup && <div className="ConfirmationContainer">
                <div className="ConfirmationBox">
                    <div className="Header">
                        <img onClick={() => setShowPopup(false)} className="CancelButton"  src="https://img.icons8.com/cute-clipart/30/000000/cancel.png"/>
                        <h3 className="Title">Please confirm your details</h3>
                    </div>
                    <div className="Inputs">
                        <ConfirmationInput label="First Name" value="{currentUser.firstName}" />
                        <ConfirmationInput label="Last Name" value="{profile.lastName}" />
                        <ConfirmationInput label="Email" value="{currentUser.email}" />
                        <ConfirmationInput label="Phone" value="{profile.phoneNo}"/>
                    </div>
                    <div className="buttonContainer_1943699">
                        <button onClick={ ()=> apply()}>Confirm </button>
                    </div>
                </div>
            </div>}
            {props.selectedJob ?
            <div className="jobItemDisplay">
                    <h2> {jobTitle}</h2>
                    <div  style={{display: "flex", justifyContent: "space-between", color: "black", fontSize: "1.2rem"}}>
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
                    <button onClick={ ()=> setShowPopup(true)}>Apply Now</button>
                </div>
            </div> :
            <BlankView text="Please select a job to view"/>
            }
        </div>
    )
}
export default  JobDetails;