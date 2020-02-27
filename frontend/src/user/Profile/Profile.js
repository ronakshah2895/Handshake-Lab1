import React from 'react';
import { connect } from 'react-redux';
import * as profileActions from '../../store/actions/profileActions';
import './Profile.css';

class Profile extends React.Component {
  componentDidMount() {
    const { fetchProfile } = this.props;
    fetchProfile();
    this.profileImageInput = React.createRef();
  }

  showProfileImageInput() {
    this.profileImageInput.current.click();
  }

  render() {
    const {
      name, email, dob, profileImage, location, phone, skills, addSkillError,
      updatePersonalInfo, addSkill, removeSkill, addProfileImage, addEducation,
    } = this.props;
    return (
      <div className="PROFILE container">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <form className="profile-image-input">
                <input type="file" name="profile_image" accept="image/*" onChange={addProfileImage} ref={this.profileImageInput} />
              </form>
              <div className="image-container">
                <div className="image-hover-background" tabIndex="0" onClick={this.showProfileImageInput.bind(this)} onKeyDown={this.showProfileImageInput.bind(this)} role="button">.</div>
                <img src={profileImage} className="card-img-top" alt="" />
              </div>
              <div className="card-body text-center">
                <span className="editIcon" aria-hidden="true" data-toggle="modal" data-target="#profileEdit">&#9998;</span>
                <h3>{name}</h3>
                <p>
                  <span className="font-weight-bold">Email: </span>
                  <span>{email}</span>
                </p>
                <p>
                  <span className="font-weight-bold">DOB: </span>
                  <span>{dob || 'Not Set'}</span>
                </p>
                <p>
                  <span className="font-weight-bold">Location: </span>
                  <span>{location || 'Not Set'}</span>
                </p>
                <p>
                  <span className="font-weight-bold">Phone: </span>
                  <span>{phone || 'Not Set'}</span>
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Skills</h3>
                { skills.map((skill) => (
                  <span className="badge badge-pill badge-primary" key={skill}>
                    <span>{skill}</span>
                    <span className="remove-icon" tabIndex="0" onClick={removeSkill.bind(null, skill)} onKeyDown={removeSkill.bind(null, skill)} role="button">&times;</span>
                  </span>
                ))}
                <form onSubmit={addSkill} className="skill-form">
                  <input type="text" name="skill" id="inputSkill" className="form-control" placeholder="Add Skill" required />
                  <button type="submit" className="btn btn-primary">Submit</button>
                  {addSkillError && (
                    <span className="text-danger add-skill-error">Skill Exists</span>
                  )}
                </form>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="card">
              <div className="card-header">Education</div>
              <div className="card-body">
                <div>
                  <h5 className="card-title">San Jose State University</h5>
                  <span className="card-text">
                    <span className="font-weight-bold">Degree: </span>
                    Masters of Science
                  </span>
                  <br />
                  <span className="card-text">
                    <span className="font-weight-bold">Year of Passing: </span>
                    2019
                  </span>
                  <br />
                  <span className="card-text">
                    <span className="font-weight-bold">Major: </span>
                    Software Engineering
                  </span>
                  <br />
                  <span className="card-text">
                    <span className="font-weight-bold">GPA: </span>
                    3.33
                  </span>
                  <br />
                  <span className="card-text">
                    <span className="font-weight-bold">Location: </span>
                    San Jose
                  </span>
                  <hr />
                </div>
                <button type="button" data-toggle="modal" data-target="#addEducation" className="btn btn-primary">Add Education</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal" id="profileEdit" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Personal Details</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={updatePersonalInfo}>
                <div className="modal-body">
                  <input type="text" name="name" id="inputName" defaultValue={name} className="form-control" placeholder="Name" required />
                  <input type="date" name="dob" id="inputDOB" defaultValue={dob} className="form-control" placeholder="DOB" />
                  <input type="text" name="location" id="inputLocation" defaultValue={location} className="form-control" placeholder="Location" />
                  <input type="number" name="phone" id="inputPhone" defaultValue={phone} className="form-control" placeholder="Phone" />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">Save changes</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="modal" id="addEducation" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Education</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={addEducation}>
                <div className="modal-body">
                  <input type="text" name="college" id="inputCollege" className="form-control" placeholder="College Name" required />
                  <input type="text" name="degree" id="inputDegree" className="form-control" placeholder="Degree" required />
                  <input type="number" name="year_of_passing" id="inputYear" className="form-control" placeholder="Year of Passing" required />
                  <input type="text" name="major" id="inputMajor" className="form-control" placeholder="Major" required />
                  <input type="number" name="cgpa" id="inputGPA" className="form-control" placeholder="GPA" step="0.01" required />
                  <input type="text" name="location" id="inputLocation" className="form-control" placeholder="Location" required />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">Save changes</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.profileReducer.name,
  email: state.profileReducer.email,
  dob: state.profileReducer.dob,
  profileImage: process.env.REACT_APP_SERVER_ROOT + state.profileReducer.profile_image,
  location: state.profileReducer.location,
  phone: state.profileReducer.phone,
  skills: state.profileReducer.skills,
  addSkillError: state.profileReducer.addSkillError,
});

const mapDispatchToProps = (dispatch) => ({
  updatePersonalInfo: (ev) => {
    ev.preventDefault();
    dispatch(profileActions.updatePersonalInfo(ev));
  },
  fetchProfile: () => {
    dispatch(profileActions.fetchProfile());
  },
  addSkill: (ev) => {
    ev.preventDefault();
    dispatch(profileActions.addSkill(ev));
  },
  removeSkill: (skill) => {
    dispatch(profileActions.removeSkill(skill));
  },
  addProfileImage: (ev) => {
    dispatch(profileActions.addProfileImage(ev));
  },
  addEducation: (ev) => {
    console.log('Added');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
