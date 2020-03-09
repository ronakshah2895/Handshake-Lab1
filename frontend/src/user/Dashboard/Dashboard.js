import React from 'react';
import { connect } from 'react-redux';
import * as jobActions from '../../store/actions/jobsActions';

class Dashboard extends React.Component {
  componentDidMount() {
    const { fetchJobs } = this.props;
    fetchJobs();
  }

  render() {
    return (
      <h1>User Dashboard</h1>
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
