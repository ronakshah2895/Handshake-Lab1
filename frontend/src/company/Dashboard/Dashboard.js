import React from 'react';
import { connect } from 'react-redux';
import * as jobActions from '../../store/actions/jobsActions';
import './Dashboard.css';

class Dashboard extends React.Component {
  componentDidMount() {
    const { fetchJobs } = this.props;
    fetchJobs();
  }

  render() {
    const { jobs } = this.props;
    return (
      <div className="DASHBOARD_C container">
        <button type="button" className="btn btn-primary mt-2">Post Job</button>
        { jobs.map((job, index) => (
          <div className="card" key={`job-${index + 1}`}>
            <div className="card-header">
              <div className="d-inline-block">
                <h5>{job.title}</h5>
                <span>{job.creator.name}</span>
              </div>
              <button type="button" className="btn btn-primary float-right">View Applications</button>
            </div>
            <div className="card-body">
              <div className="row">
                <span className="col">{`\uD83D\uDCBC ${job.category}`}</span>
                <span className="col">{`\uD83D\uDCCC ${job.location}`}</span>
                <span className="col">{`$${job.salary} per hour`}</span>
                <span className="col">{`\uD83D\uDD51 Posted on ${job.createdAt}`}</span>
                <span className="col">{`\uD83D\uDD51 Deadline on ${job.deadline}`}</span>
              </div>
            </div>
          </div>
        ))}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
