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

export const fetchApplications = (jobId = null) => (dispatch) => {
  const params = jobId ? { jobId } : jobId;
  sendPost('jobs/get_applications', params).then((applications) => {
    dispatch({
      applications,
      type: 'FETCH_APPLICATIONS',
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
  sendPost('jobs/apply_job', target).then((jobId) => {
    target.reset();
    $('.modal').modal('hide');
    dispatch({ jobId: parseInt(jobId, 10), type: 'APPLY_JOB' });
  });
};

export const toggleStatusFilter = (filter) => (dispatch) => {
  dispatch({ filter, type: 'TOGGLE_STATUS_FILTER' });
};

export const applyFilter = (ev, type) => (dispatch) => {
  const filter = { [type]: ev.target.value };
  dispatch({ filter, type: 'APPLY_FILTER' });
};

export const updatePreviewResume = (resume) => (dispatch) => {
  dispatch({ resume, type: 'UPDATE_PREVIEW_RESUME' });
};
