const initialState = {
  students: [],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_STUDENTS':
      return {
        ...state,
        students: action.students,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
