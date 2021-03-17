import React, { useEffect, useState } from "react";
import JobItem from "../JobItem/JobItem.component";
import  "./JobDisplayPage.styles.scss";
import  faker  from "faker";
import JobDetails from "../JobDetails/JobDetails.component";
import MyJobs from "../MyJobs/MyJobs.component";




const JobDisplayPage = ({ user, addJobToUser, getUserJobs }) => {
    const [jobData, setJobData ]= useState([])
    const [searchInput,setSearchInput]=useState("") 
    const [selectedJob, setSelectedJob] = useState(null) 
    const [showJobsPage, setShowJobsPage] = useState(true)

    useEffect(()=>{
        createFakeData()
    },[])
   const createFakeData = () =>{
       let fakeData = []
       for(let i =0 ; i<100;i++)
       {
            let data = {}
        data["jobTitle"] = faker.name.jobTitle() 
        data["city"] = faker.address.city()    
        data["jobDescription"] = faker.lorem.words(100)  
        data["jobtype"] = faker.name.jobType()  
        data["companyName"] = faker.company.companyName() 
        data["jobId"] = faker.random.uuid()   
        data["postedDate"] = new Date().toString().split(" ").slice(0, 4).join(' ') 
        fakeData.push(data)

        }
        setJobData(fakeData);
   }
   console.log("",jobData)
   
   console.log("",searchInput)


   const handleSearch = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)


   }
   
   const result = jobData.filter(({jobTitle}) => jobTitle.toLowerCase().includes(searchInput.toLowerCase()))
   
   console.log("result",result)
    return (
        <div className= "jobDisplayPage_1943699">
            <div  className= "search-filter_1943699">
                <form action="">
                    <input placeholder = "Search for Jobs" type="text" onChange={e=> handleSearch(e)}/>
                </form>
                {showJobsPage ?
                    <h2 onClick={() => setShowJobsPage(false)} className="Link">My Jobs</h2>:
                    <h2 onClick={() => setShowJobsPage(true)} className="Link">View Jobs</h2>
                }
            </div>
            {showJobsPage ?
                <div className="jobs-details_1943699">
                    <div className= "jobs_1943699">
                        {
                            result.map((job)=> <JobItem job={job} setSelectedJob={setSelectedJob}/>)
                        }
                    </div>
                    <div className= "details_1943699">
                        <JobDetails user={user} addJobToUser={addJobToUser} selectedJob={selectedJob}/>
                    </div>
                </div>:
                <MyJobs jobs={getUserJobs}/>
            }
        </div>
    )
}


export default JobDisplayPage;