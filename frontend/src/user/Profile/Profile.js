import React from 'react';
import { connect } from 'react-redux';
import './Profile.css';

function Profile(props) {
  const { editProfile } = props;
  return (
    <div className="PROFILE container">
      <div className="row">
        <div className="col-3">
          <div className="card">
            <img src="https://www.interplayit.com/wp-content/uploads/2018/10/profile-placeholder.jpg" className="card-img-top" alt="" />
            <div className="card-body text-center">
              <span className="editIcon" aria-hidden="true" data-toggle="modal" data-target="#profileEdit">&#9998;</span>
              <h3>Ronak Shah</h3>
              <p>
                <span className="font-weight-bold">Email: </span>
                <span>rony@test.com</span>
              </p>
              <p>
                <span className="font-weight-bold">DOB: </span>
                <span>01/28/1995</span>
              </p>
              <p>
                <span className="font-weight-bold">Location: </span>
                <span>San Jose, California</span>
              </p>
              <p>
                <span className="font-weight-bold">Phone: </span>
                <span>6462208232</span>
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Skills</h3>
              <span className="badge badge-pill badge-primary">
                <span>Java</span>
                <span className="remove-icon">&times;</span>
              </span>
              <span className="badge badge-pill badge-primary">
                <span>C</span>
                <span className="remove-icon">&times;</span>
              </span>
              <span className="badge badge-pill badge-primary">
                <span>C++</span>
                <span className="remove-icon">&times;</span>
              </span>
              <form onSubmit={editProfile} className="skill-form">
                <input type="text" name="skill" id="inputSkill" className="form-control" placeholder="Add Skill" required />
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-9">
          <h1>Hello World!</h1>
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
            <form onSubmit={editProfile}>
              <div className="modal-body">
                <input type="text" name="name" id="inputName" className="form-control" placeholder="Name" required />
                <input type="date" name="dob" id="inputDOB" className="form-control" placeholder="DOB" />
                <input type="text" name="location" id="inputLocation" className="form-control" placeholder="Location" />
                <input type="number" name="phone" id="inputPhone" className="form-control" placeholder="Phone" />
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

const mapStateToProps = (state) => ({
  loggedIn: state.authReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  editProfile: (ev) => {
    ev.preventDefault();
    console.log('Form Submitted');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
