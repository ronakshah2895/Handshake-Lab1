const initialState = {
  jobs: [],
  applications: [],
  filteredApplications: [],
  statusFilter: {
    Pending: true,
    Reviewed: true,
    Declined: true,
  },
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
        filteredApplications: [...action.applications],
        statusFilter: { ...initialState.statusFilter },
      };
    case 'TOGGLE_STATUS_FILTER':
      return {
        ...state,
        filteredApplications: state.applications.filter((application) => {
          const filterValues = { ...state.statusFilter };
          filterValues[action.filter] = !filterValues[action.filter];
          return filterValues[application.job_applications[0].status];
        }),
        statusFilter: {
          ...state.statusFilter,
          [action.filter]: !state.statusFilter[action.filter],
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
