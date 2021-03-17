import React from 'react'
import BlankView from '../../../../../components/BlankView/BlankView.component'

const  Job_Details = (props) => {
    let jobTitle = ""
    let jobDescription =  ""
    let jobtype = ""
    let city = ""


    if (props.selectedJob) {
        console.log("sj",props.selectedJob)
         jobTitle =  props.selectedJob.jobTitle
         jobDescription  = props.selectedJob.jobDescription
         jobtype = props.selectedJob.jobtype
         city  = props.selectedJob.city 

    }
    
    // const {jobTitle,jobDescription,jobtype,city} = props.selectedJob
    return (
        <div style={{width: "100%", height: "100%"}}>
            {props.selectedJob ?
                <div className="jobItem">
                    <h2> {jobTitle}</h2>
                    <p>{jobDescription}
                    </p>

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
                        <button >
                        Apply Now
                        </button>
                    </div>
                </div>
                : <BlankView text="Please select a job to view"/>
            }
        </div>
    )
}
export default  Job_Details;