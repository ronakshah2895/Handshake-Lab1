import React from 'react';
import { connect } from 'react-redux';
import * as studentActions from '../../store/actions/studentsActions';
import './Students.css';

class Students extends React.Component {
  componentDidMount() {
    const { fetchStudents } = this.props;
    fetchStudents();
  }

  render() {
    const { students } = this.props;
    return (
      <div className="STUDENT container">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Filters</h5>
              </div>
            </div>
          </div>
          <div className="col-8">
            { students.map((student) => (
              <div className="card" key={student.email}>
                <div className="student-card card-body">
                  <img className="card-img" src={process.env.REACT_APP_SERVER_ROOT + student.profile_image} alt="" />
                  <div className="card-title">
                    <h5>{student.name}</h5>
                    <span>{student.college}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  students: state.studentsReducer.students,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStudents: () => {
    dispatch(studentActions.fetchStudents());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);
