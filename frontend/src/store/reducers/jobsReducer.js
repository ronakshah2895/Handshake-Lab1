const initialState = {
  jobs: [],
  applications: [],
  selectedJob: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_JOBS':
      return {
        ...state,
        jobs: [...action.jobs],
      };
    case 'POST_JOB':
      return {
        ...state,
        jobs: state.jobs.concat([action.job]),
      };
    case 'UPDATE_SELECTED':
      return {
        ...state,
        selectedJob: action.selectedJob,
      };
    case 'APPLY_JOB':
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.jobId),
      };
    case 'FETCH_APPLICATIONS':
      return {
        ...state,
        applications: [...action.applications],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
