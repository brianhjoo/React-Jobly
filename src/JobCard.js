import './JobCard.css';

/** Job card
 *
 * Props:
 *  - job: job object
 *
 *      {id, title, salary, equity}
 *
 * State:
 *  - none
 *
 * [CompanyDetail, JobList] --> JobCardList --> JobCard
 */
function JobCard({ job }) {
  const { title, salary, equity, companyName } = job;

  return (
    <div className="JobCard">
      <h3>{title}</h3>
      {companyName && <h4>{companyName}</h4>}
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  );
}


export default JobCard;
