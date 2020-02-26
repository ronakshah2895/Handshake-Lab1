import { sendPost } from '../../helpers/communicationHelper';

export const fetchProfileData = () => (dispatch) => {
  sendPost('profile/get_profile').then((profile) => {
    dispatch({
      type: 'FETCH_PROFILE',
      skills: profile,
    });
  });
};

export const addSkill = (ev) => (dispatch) => {
  const { target } = ev;
  sendPost('profile/add_skill', target).then((skill) => {
    target.reset();
    dispatch({
      type: 'ADD_SKILL',
      skill,
    });
  }, () => {
    dispatch({ type: 'ADD_SKILL_ERROR' });
  });
};

export const removeSkill = (skill) => (dispatch) => {
  sendPost('profile/remove_skill', { skill }).then(() => {
    dispatch({
      type: 'REMOVE_SKILL',
      skill,
    });
  });
};
