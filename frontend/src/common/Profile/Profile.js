import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as profileActions from '../../store/actions/profileActions';
import './Profile.css';

class Profile extends React.Component {
  componentDidMount() {
    const { fetchProfile, match } = this.props;
    const { email } = match.params;
    fetchProfile(email);
    this.profileImageInput = React.createRef();
  }

  showProfileImageInput() {
    this.profileImageInput.current.click();
  }

  render() {
    const {
      name, email, dob, profileImage, userLocation, phone, skills, addSkillError, educations,
      experiences, objective, isCompany, match,
      updatePersonalInfo, addSkill, removeSkill, addProfileImage, addEducation,
      removeEducation, addExperience, removeExperience, editObjective,
    } = this.props;
    const profileEmail = match.params.email;
    return (
      <div className="PROFILE container">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <form className="profile-image-input">
                <input type="file" name="profile_image" accept="image/*" onChange={addProfileImage} ref={this.profileImageInput} />
              </form>
              <div className="image-container">
                <div className="image-hover-background" tabIndex="0" onClick={this.showProfileImageInput.bind(this)} onKeyDown={this.showProfileImageInput.bind(this)} role="button">.</div>
                <img src={profileImage} className="card-img-top" alt="" />
              </div>
              <div className="card-body text-center">
                { !profileEmail && (
                  <span className="editIcon" aria-hidden="true" data-toggle="modal" data-target="#profileEdit">&#9998;</span>
                )}
                <h3>{name}</h3>
                <p>
                  <span className="font-weight-bold">Email: </span>
                  <span>{email}</span>
                </p>
                {!isCompany && (
                  <p>
                    <span className="font-weight-bold">DOB: </span>
                    <span>{dob || 'Not Set'}</span>
                  </p>
                )}
                <p>
                  <span className="font-weight-bold">Location: </span>
                  <span>{userLocation || 'Not Set'}</span>
                </p>
                <p>
                  <span className="font-weight-bold">Phone: </span>
                  <span>{phone || 'Not Set'}</span>
                </p>
              </div>
            </div>

            {!isCompany && (
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Skills</h3>
                  { skills.map((skill) => (
                    <span className="badge badge-pill badge-primary" key={skill}>
                      <span>{skill}</span>
                      <span className="remove-icon" tabIndex="0" onClick={removeSkill.bind(null, skill)} onKeyDown={removeSkill.bind(null, skill)} role="button">&times;</span>
                    </span>
                  ))}
                  { !profileEmail && (
                    <form onSubmit={addSkill} className="skill-form">
                      <input type="text" name="skill" id="inputSkill" className="form-control" placeholder="Add Skill" required />
                      <button type="submit" className="btn btn-primary">Submit</button>
                      {addSkillError && (
                        <span className="text-danger add-skill-error">Skill Exists</span>
                      )}
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="col-8">
            <div className="card">
              <div className="card-header">
                {isCompany ? ' Description' : ' Objective'}
                { !profileEmail && (
                  <span className="objectiveEdit" aria-hidden="true" data-toggle="modal" data-target="#objectiveEdit">&#9998;</span>
                )}
              </div>
              <div className="card-body">
                <p>{objective || 'Not Set'}</p>
              </div>
            </div>

            {!isCompany && (
              <div className="card">
                <div className="card-header">Education</div>
                <div className="card-body">
                  { educations.map((educationData, index) => {
                    const key = `education-${index}`;
                    return (
                      <div key={key}>
                        { !profileEmail && (
                          <span className="ed-del-icon" tabIndex="0" onClick={removeEducation.bind(null, educationData.id)} onKeyDown={removeEducation.bind(null, educationData.id)} role="button">&#128465;</span>
                        )}
                        <h5 className="card-title">{educationData.college}</h5>
                        <span className="card-text">
                          <span className="font-weight-bold">Degree: </span>
                          {educationData.degree}
                        </span>
                        <br />
                        <span className="card-text">
                          <span className="font-weight-bold">Year of Passing: </span>
                          {educationData.year_of_passing}
                        </span>
                        <br />
                        <span className="card-text">
                          <span className="font-weight-bold">Major: </span>
                          {educationData.major}
                        </span>
                        <br />
                        <span className="card-text">
                          <span className="font-weight-bold">GPA: </span>
                          {educationData.cgpa}
                        </span>
                        <br />
                        <span className="card-text">
                          <span className="font-weight-bold">Location: </span>
                          {educationData.location}
                        </span>
                        <hr />
                      </div>
                    );
                  })}
                  { !profileEmail && (
                    <button type="button" data-toggle="modal" data-target="#addEducation" className="btn btn-primary">Add Education</button>
                  )}
                </div>
              </div>
            )}

            {!isCompany && (
              <div className="card">
                <div className="card-header">Experience</div>
                <div className="card-body">
                  { experiences.map((experienceData, index) => {
                    const key = `education-${index}`;
                    return (
                      <div key={key}>
                        { !profileEmail && (
                          <span className="ed-del-icon" tabIndex="0" onClick={removeExperience.bind(null, experienceData.id)} onKeyDown={removeExperience.bind(null, experienceData.id)} role="button">&#128465;</span>
                        )}
                        <h5 className="card-title">{experienceData.company}</h5>
                        <span className="card-text">
                          <span className="font-weight-bold">Role: </span>
                          {experienceData.title}
                        </span>
                        <br />
                        <span className="card-text">
                          <span className="font-weight-bold">Dates: </span>
                          {experienceData.start_date}
                          &nbsp;to&nbsp;
                          {experienceData.end_date}
                        </span>
                        <br />
                        <span className="card-text">
                          <span className="font-weight-bold">Location: </span>
                          {experienceData.location}
                        </span>
                        <br />
                        <span className="card-text">
                          <span className="font-weight-bold">Description: </span>
                          {experienceData.description}
                        </span>
                        <hr />
                      </div>
                    );
                  })}
                  { !profileEmail && (
                    <button type="button" data-toggle="modal" data-target="#addExperience" className="btn btn-primary">Add Experience</button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        { !profileEmail && (
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
                    {!isCompany && (
                      <input type="date" name="dob" id="inputDOB" defaultValue={dob} className="form-control" placeholder="DOB" />
                    )}
                    <input type="text" name="location" id="inputLocation" defaultValue={userLocation} className="form-control" placeholder="Location" />
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
        )}

        { !profileEmail && (
          <div className="modal" id="objectiveEdit" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Edit
                    {isCompany ? ' Description' : ' Objective'}
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <form onSubmit={editObjective}>
                  <div className="modal-body">
                    <textarea name="objective" id="inputObjective" defaultValue={objective} className="form-control" placeholder={isCompany ? ' Description' : ' Objective'} />
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Save changes</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        { !isCompany && !profileEmail && (
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
        )}

        { !isCompany && !profileEmail && (
          <div className="modal" id="addExperience" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Expereince</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <form onSubmit={addExperience}>
                  <div className="modal-body">
                    <input type="text" name="company" id="inputCompany" className="form-control" placeholder="Company Name" required />
                    <input type="text" name="title" id="inputTitle" className="form-control" placeholder="Title" required />
                    <input type="date" name="start_date" id="inputStartDate" className="form-control" placeholder="Start Date" required />
                    <input type="date" name="end_date" id="inputEndDate" className="form-control" placeholder="End Date" required />
                    <input type="text" name="location" id="inputLocation" className="form-control" placeholder="Location" required />
                    <textarea name="description" id="inputDescription" className="form-control" placeholder="Description" required />
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Save changes</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.profileReducer.name,
  email: state.profileReducer.email,
  dob: state.profileReducer.dob,
  profileImage: process.env.REACT_APP_SERVER_ROOT + state.profileReducer.profile_image,
  userLocation: state.profileReducer.location,
  phone: state.profileReducer.phone,
  skills: state.profileReducer.skills,
  addSkillError: state.profileReducer.addSkillError,
  educations: state.profileReducer.educations,
  experiences: state.profileReducer.experiences,
  objective: state.profileReducer.objective,
  isCompany: state.authReducer.is_company,
});

const mapDispatchToProps = (dispatch) => ({
  updatePersonalInfo: (ev) => {
    ev.preventDefault();
    dispatch(profileActions.updatePersonalInfo(ev));
  },
  fetchProfile: (email) => {
    dispatch(profileActions.fetchProfile(email));
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
    ev.preventDefault();
    dispatch(profileActions.addEducation(ev));
  },
  removeEducation: (educationId) => {
    dispatch(profileActions.removeEducation(educationId));
  },
  addExperience: (ev) => {
    ev.preventDefault();
    dispatch(profileActions.addExperience(ev));
  },
  removeExperience: (experienceId) => {
    dispatch(profileActions.removeExperience(experienceId));
  },
  editObjective: (ev) => {
    ev.preventDefault();
    dispatch(profileActions.editObjective(ev));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));
