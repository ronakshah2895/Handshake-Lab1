const initialState = {
  skills: [],
  addSkillError: false,
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
        addSkillError: false,
      };
    case 'ADD_SKILL_ERROR':
      return {
        ...state,
        addSkillError: true,
      };
    case 'REMOVE_SKILL':
      return {
        ...state,
        skills: state.skills.filter((skill) => skill !== action.skill),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
