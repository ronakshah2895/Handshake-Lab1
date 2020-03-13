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
    const { jobs, postJob } = this.props;
    return (
      <div className="DASHBOARD_C container">
        <button type="button" data-toggle="modal" data-target="#postJob" className="btn btn-primary mt-2">Post Job</button>
        { jobs.map((job, index) => (
          <div className="card" key={`job-${index + 1}`}>
            <div className="card-header">
              <div className="d-inline-block">
                <h5>{job.title}</h5>
                <span>{job.creator.name}</span>
              </div>
              <Link to={`applications/${job.id}`}><button type="button" className="btn btn-primary float-right">View Applications</button></Link>
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

        <div className="modal" id="postJob" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Post Job</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={postJob}>
                <div className="modal-body">
                  <input type="text" name="title" id="inputTitle" className="form-control" placeholder="Title" required />
                  <select defaultValue="Full-Time" name="category" className="form-control" id="inputCategory">
                    <option>Full-Time</option>
                    <option>Part-Time</option>
                    <option>Intern</option>
                    <option>On-Campus</option>
                  </select>
                  <input type="datetime-local" name="deadline" id="inputDeadline" className="form-control" placeholder="Deadline" required />
                  <input type="number" name="salary" id="inputSalary" className="form-control" placeholder="Salary" required />
                  <input type="text" name="location" id="inputLocation" className="form-control" placeholder="Location" required />
                  <textarea name="description" id="inputDescription" className="form-control" placeholder="Description" required />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">Save changes</button>
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
  jobs: state.jobsReducer.jobs,
});

const mapDispatchToProps = (dispatch) => ({
  fetchJobs: () => {
    dispatch(jobActions.fetchJobs());
  },
  postJob: (ev) => {
    ev.preventDefault();
    dispatch(jobActions.postJob(ev));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
