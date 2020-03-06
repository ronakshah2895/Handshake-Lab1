const initialState = {
  students: [],
  filteredStudents: [],
  nameFilter: '',
  collegeFilter: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_STUDENTS':
      return {
        ...state,
        students: [...action.students],
        filteredStudents: [...action.students],
        nameFilter: '',
        collegeFilter: '',
      };
    case 'FILTER_STUDENTS':
      return {
        ...state,
        filteredStudents: state.students.filter((student) => {
          const name = student.name.toLowerCase();
          const college = student.college.toLowerCase();
          const nameFilter = action.filter === 'name' ? action.nameFilter : state.nameFilter;
          const collegeFilter = action.filter === 'college' ? action.collegeFilter : state.collegeFilter;
          if (name.includes(nameFilter) && college.includes(collegeFilter)) return true;
          return false;
        }),
        nameFilter: action.filter === 'name' ? action.nameFilter : state.nameFilter,
        collegeFilter: action.filter === 'college' ? action.collegeFilter : state.collegeFilter,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
