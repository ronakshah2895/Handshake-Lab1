import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import * as eventsActions from '../../store/actions/eventsActions';
import './Registrations.css';

class Registrations extends React.Component {
  componentDidMount() {
    const { fetchRegistrations, match } = this.props;
    fetchRegistrations(match.params.eventId);
  }

  render() {
    const { registrations } = this.props;
    return (
      <div className="REGISTRATIONS_C container">
        <h5 className="mt-2">{`Registrations for ${registrations.length && registrations[0].name}`}</h5>
        { registrations.length && registrations[0].event_registrations.map((registration, ind) => (
          <div className="card" key={`registration-${ind + 1}`}>
            <div className="card-body">
              <img className="card-img" src={process.env.REACT_APP_SERVER_ROOT + registration.participant.profile_image} alt="" />
              <div className="card-title">
                <Link to={`/profile/${registration.participant.email}`}><h5>{registration.participant.name}</h5></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  registrations: state.eventsReducer.registrations,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRegistrations: (eventId) => {
    dispatch(eventsActions.fetchRegistrations(eventId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Registrations));
