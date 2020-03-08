import { sendPost } from '../../helpers/communicationHelper';

export const fetchJobs = () => (dispatch) => {
  sendPost('jobs/get_jobs').then((jobs) => {
    dispatch({
      jobs,
      type: 'FETCH_JOBS',
    });
  });
};
