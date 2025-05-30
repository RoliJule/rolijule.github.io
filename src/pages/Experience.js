import React from "react";
import jobs from "../assets/expeirence/expereince.js"
import JobCard from "../components/JobCard.js"

const Experience = () => {

    return (
        <section id="experience-section"> 
            <div>
                {jobs.map(job => {
                    //console.log(job);
                    return <JobCard experience={job} />
                })}
            </div>
        </section>
    );
}

export default Experience;