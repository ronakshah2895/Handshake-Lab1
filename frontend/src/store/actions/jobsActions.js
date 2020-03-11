/* global $ */
import { sendPost } from '../../helpers/communicationHelper';

export const fetchJobs = () => (dispatch) => {
  sendPost('jobs/get_jobs').then((jobs) => {
    dispatch({
      jobs,
      type: 'FETCH_JOBS',
    });
  });
};

export const postJob = (ev) => (dispatch) => {
  const { target } = ev;
  sendPost('jobs/post_job', target).then((job) => {
    target.reset();
    $('.modal').modal('hide');
    dispatch({
      job,
      type: 'POST_JOB',
    });
  });
};

export const updateSelected = (selectedJob) => (dispatch) => {
  dispatch({ selectedJob, type: 'UPDATE_SELECTED' });
};

export const applyJob = (ev) => (dispatch) => {
  const { target } = ev;
  sendPost('jobs/apply_job', target).then((res) => {
    target.reset();
    $('.modal').modal('hide');
    console.log(res);
  });
};
