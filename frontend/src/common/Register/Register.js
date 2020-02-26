import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Register.css';
import * as authActions from '../../store/actions/authActions';

function Register(props) {
  const {
    registerError, isCompany, register, history, toggleCompanyRadio,
  } = props;
  return (
    <div className="REGISTER text-center vertical-align">
      <form onSubmit={register.bind(null, history)} className="form-signin">
        <h3 className="mb-3 font-weight-normal">Register</h3>
        { registerError && (
          <div className="alert alert-danger" role="alert">
            Invalid User details
          </div>
        )}
        <input type="text" name="name" id="inputName" className="form-control" placeholder="Name" required />
        <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email Address" required />
        <input type="password" name="password" id="inputPass" className="form-control" placeholder="Password" required />
        <span className="mr-5">Are you a company?</span>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="companyRadio1">
            <input className="form-check-input" onChange={toggleCompanyRadio} type="radio" name="is_company" id="companyRadio1" value="1" checked={isCompany} />
            Yes
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="companyRadio0">
            <input className="form-check-input" onChange={toggleCompanyRadio} type="radio" name="is_company" id="companyRadio0" value="0" checked={!isCompany} />
            No
          </label>
        </div>
        <br />
        { isCompany && (
          <input type="text" name="location" id="inputLocation" className="form-control" placeholder="Location" required />
        )}
        { !isCompany && (
          <input type="text" name="college" id="inputCollege" className="form-control" placeholder="College" required />
        )}
        <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Register</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  registerError: state.authReducer.registerError,
  isCompany: state.authReducer.isCompany,
});

const mapDispatchToProps = (dispatch) => ({
  register: (history, ev) => {
    ev.preventDefault();
    dispatch(authActions.register(ev, history));
  },
  toggleCompanyRadio: () => {
    dispatch(authActions.toggleCompanyRadio());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
