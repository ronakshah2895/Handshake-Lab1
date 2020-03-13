import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import * as jobsActions from '../../store/actions/jobsActions';
import './Applications.css';

class Applications extends React.Component {
  componentDidMount() {
    const { fetchApplications, match } = this.props;
    fetchApplications(match.params.jobId);
  }

  render() {
    const {
      applications, resumePreview, updatePreviewResume, updateAppStatus,
    } = this.props;
    return (
      <div className="APPLICATIONS_C container">
        <h5 className="mt-2">{`Application for ${applications.length && applications[0].title}`}</h5>
        { applications.length && applications[0].job_applications.map((application, index) => (
          <div className="card" key={`application-${index + 1}`}>
            <div className="card-body">
              <img className="card-img" src={process.env.REACT_APP_SERVER_ROOT + application.applicant.profile_image} alt="" />
              <div className="card-title">
                <Link to={`/profile/${application.applicant.email}`}><h5>{application.applicant.name}</h5></Link>
                <button type="button" onClick={updatePreviewResume.bind(null, application.resume)} className="btn btn-primary" data-toggle="modal" data-target="#resumePreview">Preview Resume</button>
              </div>
              <select className="form-control status-select" onChange={updateAppStatus.bind(null, application.id)} value={application.status} id="updateAppStatus">
                <option>Pending</option>
                <option>Reviewed</option>
                <option>Declined</option>
              </select>
            </div>
          </div>
        ))}

        <div className="modal" id="resumePreview" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Preview Resume</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <object className="pdf-preview" data={process.env.REACT_APP_SERVER_ROOT + resumePreview} type="application/pdf">
                  <embed src={process.env.REACT_APP_SERVER_ROOT + resumePreview} type="application/pdf" />
                </object>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  applications: state.jobsReducer.applications,
  resumePreview: state.jobsReducer.resumePreview,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApplications: (jobId) => {
    dispatch(jobsActions.fetchApplications(jobId));
  },
  updatePreviewResume: (resume) => {
    dispatch(jobsActions.updatePreviewResume(resume));
  },
  updateAppStatus: (appId, ev) => {
    dispatch(jobsActions.updateAppStatus(ev, appId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Applications));
