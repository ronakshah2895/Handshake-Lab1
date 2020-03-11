import React from 'react';
import { connect } from 'react-redux';
import * as jobsActions from '../../store/actions/jobsActions';
import './Applications.css';

class Applications extends React.Component {
  componentDidMount() {
    const { fetchApplications } = this.props;
    fetchApplications();
  }

  render() {
    const { applications } = this.props;
    return (
      <div className="APPLICATIONS_U container">
        <div className="row">
          <div className="col-4">
            <h5>Filters</h5>
          </div>
          <div className="col-8">
            { applications.map((application, index) => (
              <div className="card" key={`application-${index + 1}`}>
                <div className="card-body">
                  <h5>{application.title}</h5>
                  <div className="row">
                    <span className="col font-weight-bold">{application.creator.name}</span>
                    <span className="col">{`\u24D8 Status: ${application.job_applications[0].status}`}</span>
                    <span className="col">{`\u2713 Applied: ${application.job_applications[0].createdAt}`}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  applications: state.jobsReducer.applications,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApplications: () => {
    dispatch(jobsActions.fetchApplications());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Applications);
