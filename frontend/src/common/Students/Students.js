import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as studentActions from '../../store/actions/studentsActions';
import './Students.css';

class Students extends React.Component {
  componentDidMount() {
    const { fetchStudents } = this.props;
    fetchStudents();
  }

  render() {
    const { students, applyFilter } = this.props;
    return (
      <div className="STUDENT container">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Filters</h5>
                <hr />
                <h5 className="card-title">Name</h5>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span role="img" className="input-group-text" aria-label="search" id="filter-name">&#128269;</span>
                  </div>
                  <input type="text" onChange={applyFilter} name="name-filter" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="filter-name" />
                </div>
                <hr />
                <h5 className="card-title">College</h5>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span role="img" className="input-group-text" aria-label="search" id="filter-college">&#128269;</span>
                  </div>
                  <input type="text" onChange={applyFilter} name="college-filter" className="form-control" placeholder="College" aria-label="Name" aria-describedby="filter-college" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            { students.map((student) => (
              <Link to={`/profile/${student.email}`} key={student.email}>
                <div className="card">
                  <div className="student-card card-body">
                    <img className="card-img" src={process.env.REACT_APP_SERVER_ROOT + student.profile_image} alt="" />
                    <div className="card-title">
                      <h5>{student.name}</h5>
                      <span>{student.college}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  students: state.studentsReducer.filteredStudents,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStudents: () => {
    dispatch(studentActions.fetchStudents());
  },
  applyFilter: (ev) => {
    dispatch(studentActions.applyFilter(ev));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);
