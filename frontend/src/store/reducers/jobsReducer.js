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
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
