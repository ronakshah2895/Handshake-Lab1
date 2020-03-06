import { sendPost } from '../../helpers/communicationHelper';

export const fetchStudents = () => (dispatch) => {
  sendPost('students/get_students').then((students) => {
    dispatch({
      students,
      type: 'FETCH_STUDENTS',
    });
  });
};
