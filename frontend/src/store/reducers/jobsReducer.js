const initialState = {
  jobs: [],
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
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
