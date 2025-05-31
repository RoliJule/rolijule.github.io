import "../styles/jobCardStyles.css"

const JobCard = ({experience}) => {

    return (
        <div class="job-card">
            <div className="job-header">
                <img className="job-logo" alt={experience.company} src={experience.logo}></img>
                <h1 className="job-title">{experience.title}</h1>
            </div>
            <ul className="job-responsibilites">
                {experience.responsibilities.map((point, index) => (
                    <li key="index">{point}</li>
                ))}
            </ul>
        </div>
    );
}

export default JobCard;