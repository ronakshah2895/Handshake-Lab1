/* global $ */
import { sendPost } from '../../helpers/communicationHelper';

export const fetchProfile = () => (dispatch) => {
  sendPost('profile/get_profile').then((profile) => {
    dispatch({
      profile,
      type: 'FETCH_PROFILE',
    });
  });
};

export const updatePersonalInfo = (ev) => (dispatch) => {
  sendPost('profile/update_personal_info', ev.target).then((updateObj) => {
    $('.modal').modal('hide');
    dispatch({
      updateObj,
      type: 'UPDATE_INFO',
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

export const addProfileImage = (ev) => (dispatch) => {
  console.log(ev.target.files);
  $(ev.target).parent().trigger('reset');
};
