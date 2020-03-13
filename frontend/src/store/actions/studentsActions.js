import { sendPost } from '../../helpers/communicationHelper';

export const fetchStudents = () => (dispatch) => {
  sendPost('students/get_students').then((students) => {
    dispatch({
      students,
      type: 'FETCH_STUDENTS',
    });
  });
};

export const applyFilter = (ev) => (dispatch) => {
  const { name, value } = ev.target;
  if (name === 'name-filter') {
    dispatch({ type: 'FILTER_STUDENTS', nameFilter: value.toLowerCase(), filter: 'name' });
  } else if (name === 'college-filter') {
    dispatch({ type: 'FILTER_STUDENTS', collegeFilter: value.toLowerCase(), filter: 'college' });
  } else if (name === 'skill-filter') {
    dispatch({ type: 'FILTER_STUDENTS', skillFilter: value.toLowerCase(), filter: 'skill' });
  }
};
