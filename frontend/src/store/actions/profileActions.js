/* global $ */
import { sendPost } from '../../helpers/communicationHelper';

export const fetchProfile = (email) => (dispatch) => {
  const data = email ? { email } : email;
  sendPost('profile/get_profile', data).then((profile) => {
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
  const formEl = $(ev.target).parent()[0];
  sendPost('profile/add_profile_image', formEl).then((imagePath) => {
    formEl.reset();
    dispatch({ type: 'ADD_PROFILE_IMAGE', imagePath });
  });
};

export const addEducation = (ev) => (dispatch) => {
  const { target } = ev;
  sendPost('profile/add_education', target).then((educationData) => {
    target.reset();
    $('.modal').modal('hide');
    dispatch({ type: 'ADD_EDUCATION', educationData });
  });
};

export const removeEducation = (educationId) => (dispatch) => {
  sendPost('profile/remove_education', { educationId }).then(() => {
    dispatch({ type: 'REMOVE_EDUCATION', educationId });
  });
};

export const addExperience = (ev) => (dispatch) => {
  const { target } = ev;
  sendPost('profile/add_experience', target).then((experienceData) => {
    target.reset();
    $('.modal').modal('hide');
    dispatch({ type: 'ADD_EXPERIENCE', experienceData });
  });
};

export const removeExperience = (experienceId) => (dispatch) => {
  sendPost('profile/remove_experience', { experienceId }).then(() => {
    dispatch({ type: 'REMOVE_EXPERIENCE', experienceId });
  });
};

export const editObjective = (ev) => (dispatch) => {
  const { target } = ev;
  sendPost('profile/edit_objective', target).then((objective) => {
    target.reset();
    $('.modal').modal('hide');
    dispatch({ type: 'EDIT_OBJECTIVE', objective });
  });
};
