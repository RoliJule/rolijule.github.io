import React from "react";
import jobs from "../assets/expeirence/expereince.js"
import JobCard from "../components/JobCard.js"

const Experience = () => {

    return (
        <section id="experience-section"> 
            <div id="experinece-carousel">
                <div className="viewport">
                    {jobs.map(job => {
                        //console.log(job);
                        return <JobCard experience={job} />
                    })}
                </div>
            </div>
        </section>
    );
}

export default Experience;