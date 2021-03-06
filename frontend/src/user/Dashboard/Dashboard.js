import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as jobActions from '../../store/actions/jobsActions';
import './Dashboard.css';

class Dashboard extends React.Component {
  componentDidMount() {
    const { fetchJobs } = this.props;
    fetchJobs();
  }

  render() {
    const {
      jobs, selectedJob, updateSelected, applyJob, applyFilter,
    } = this.props;
    return (
      <div className="DASHBOARD_U container">
        <div className="row filter-row">
          <input type="text" className="col form-control" onChange={applyFilter.bind(null, 'titleFilter')} id="filterTitle" placeholder="Title" />
          <input type="text" className="col form-control" onChange={applyFilter.bind(null, 'companyFilter')} id="filterCompany" placeholder="Company" />
          <select className="col form-control" onChange={applyFilter.bind(null, 'categoryFilter')} id="filterCategory">
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>On-Campus</option>
            <option>Intern</option>
          </select>
          <input type="text" className="col form-control" onChange={applyFilter.bind(null, 'locationFilter')} id="filterLocation" placeholder="Location" />
        </div>
        { jobs.map((job, index) => (
          <div className="card" key={`job-${index + 1}`}>
            <div className="card-header">
              <div className="d-inline-block">
                <h5>{job.title}</h5>
                <Link to={`/profile/${job.creator.email}`}>{job.creator.name}</Link>
              </div>
              <button type="button" onClick={updateSelected.bind(null, job.id)} data-toggle="modal" data-target="#applyJob" className="btn btn-primary float-right">Apply</button>
            </div>
            <div className="card-body">
              <div className="row">
                <span className="col">{`\uD83D\uDCBC ${job.category}`}</span>
                <span className="col">{`\uD83D\uDCCC ${job.location}`}</span>
                <span className="col">{`$${job.salary} per hour`}</span>
                <span className="col">{`\uD83D\uDD51 Posted on ${job.createdAt}`}</span>
                <span className="col">{`\uD83D\uDD51 Deadline on ${job.deadline}`}</span>
              </div>
              <p>{job.description}</p>
            </div>
          </div>
        ))}

        <div className="modal" id="applyJob" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Apply for Job</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={applyJob}>
                <div className="modal-body">
                  <label htmlFor="inputResume">
                    <h5>Resume</h5>
                    <input type="file" name="resume" accept="application/pdf" className="form-control-file" id="inputResume" />
                  </label>
                  <input type="hidden" name="jobId" id="inputJobId" value={selectedJob} />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  jobs: state.jobsReducer.filteredJobs,
  selectedJob: state.jobsReducer.selectedJob,
});

const mapDispatchToProps = (dispatch) => ({
  fetchJobs: () => {
    dispatch(jobActions.fetchJobs());
  },
  applyJob: (ev) => {
    ev.preventDefault();
    dispatch(jobActions.applyJob(ev));
  },
  updateSelected: (selectedJob) => {
    dispatch(jobActions.updateSelected(selectedJob));
  },
  applyFilter: (type, ev) => {
    dispatch(jobActions.applyFilter(ev, type));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
