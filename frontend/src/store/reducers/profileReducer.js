const initialState = {
  name: null,
  email: null,
  dob: null,
  profile_image: null,
  location: null,
  phone: null,
  skills: [],
  addSkillError: false,
  educations: [],
  experiences: [],
  objective: null,
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
    case 'ADD_PROFILE_IMAGE':
      return {
        ...state,
        profile_image: action.imagePath,
      };
    case 'ADD_EDUCATION':
      return {
        ...state,
        educations: state.educations.concat([action.educationData]),
      };
    case 'REMOVE_EDUCATION':
      return {
        ...state,
        educations: state.educations.filter((education) => education.id !== action.educationId),
      };
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experiences: state.experiences.concat([action.experienceData]),
      };
    case 'REMOVE_EXPERIENCE':
      return {
        ...state,
        experiences:
          state.experiences.filter((experience) => experience.id !== action.experienceId),
      };
    case 'EDIT_OBJECTIVE':
      return {
        ...state,
        objective: action.objective,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
