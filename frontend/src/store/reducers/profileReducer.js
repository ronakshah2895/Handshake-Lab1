const initialState = {
  skills: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE':
      return {
        ...state,
        skills: action.skills,
      };
    case 'ADD_SKILL':
      return {
        ...state,
        skills: state.skills.concat([action.skill]),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
