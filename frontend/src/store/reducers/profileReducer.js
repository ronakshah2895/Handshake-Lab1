const initialState = {
  name: null,
  email: null,
  dob: null,
  location: null,
  phone: null,
  skills: [],
  addSkillError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE':
      return {
        ...state,
        ...action.profile,
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
    case 'UPDATE_INFO':
      return {
        ...state,
        ...action.updateObj,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
