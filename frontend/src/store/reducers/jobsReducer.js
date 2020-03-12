const initialState = {
  jobs: [],
  filteredJobs: [],
  titleFilter: '',
  companyFilter: '',
  categoryFilter: 'Full-Time',
  locationFilter: '',
  applications: [],
  filteredApplications: [],
  statusFilter: {
    Pending: true,
    Reviewed: true,
    Declined: true,
  },
  selectedJob: 0,
  resumePreview: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_JOBS':
      return {
        ...state,
        jobs: [...action.jobs],
        filteredJobs: action.jobs.filter((job) => job.category === 'Full-Time'),
      };
    case 'POST_JOB':
      return {
        ...state,
        jobs: state.jobs.concat([action.job]),
      };
    case 'APPLY_FILTER':
      return {
        ...state,
        ...action.filter,
        filteredJobs: state.jobs.filter((job) => {
          const filterObj = { ...state, ...action.filter };
          if (job.category === filterObj.categoryFilter && (
            !filterObj.titleFilter
            || job.title.toLowerCase().includes(filterObj.titleFilter.toLowerCase())) && (
            !filterObj.companyFilter
            || job.creator.name.toLowerCase().includes(filterObj.companyFilter.toLowerCase())) && (
            !filterObj.locationFilter
            || job.location.toLowerCase().includes(filterObj.locationFilter.toLowerCase()))) {
            return true;
          }
          return false;
        }),
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
    case 'UPDATE_PREVIEW_RESUME':
      return {
        ...state,
        resumePreview: action.resume,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
