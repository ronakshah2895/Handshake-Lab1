const initialState = {
  jobs: [],
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
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
