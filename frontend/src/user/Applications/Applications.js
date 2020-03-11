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
    const { statusFilter, applications, toggleStatusFilter } = this.props;
    return (
      <div className="APPLICATIONS_U container">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Filters</h5>
                <hr />
                <h5 className="card-title">Status</h5>
                <label className="form-check-label" htmlFor="pendingCheck">
                  <input className="form-check-input" onChange={toggleStatusFilter.bind(null, 'Pending')} type="checkbox" value="Pending" id="pendingCheck" defaultChecked={statusFilter.Pending} />
                  Pending
                </label>
                <br />
                <label className="form-check-label" htmlFor="reviewCheck">
                  <input className="form-check-input" onChange={toggleStatusFilter.bind(null, 'Reviewed')} type="checkbox" value="Reviewed" id="reviewCheck" defaultChecked={statusFilter.Reviewed} />
                  Reviewed
                </label>
                <br />
                <label className="form-check-label" htmlFor="declinedCheck">
                  <input className="form-check-input" onChange={toggleStatusFilter.bind(null, 'Declined')} type="checkbox" value="Declined" id="declinedCheck" defaultChecked={statusFilter.Declined} />
                  Declined
                </label>
              </div>
            </div>
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
  applications: state.jobsReducer.filteredApplications,
  statusFilter: state.jobsReducer.statusFilter,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApplications: () => {
    dispatch(jobsActions.fetchApplications());
  },
  toggleStatusFilter: (filter) => {
    dispatch(jobsActions.toggleStatusFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Applications);
