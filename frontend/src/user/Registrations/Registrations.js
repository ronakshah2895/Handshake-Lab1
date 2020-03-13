import React from 'react';
import { connect } from 'react-redux';
import * as eventsActions from '../../store/actions/eventsActions';
import './Registrations.css';

class Registrations extends React.Component {
  componentDidMount() {
    const { fetchRegistrations } = this.props;
    fetchRegistrations();
  }

  render() {
    const { registrations } = this.props;
    return (
      <div className="REGISTRATIONS_U container">
        { registrations.map((registration, index) => (
          <div className="card" key={`registration-${index + 1}`}>
            <div className="card-body">
              <h5>{registration.name}</h5>
              <div className="row">
                <span className="col font-weight-bold">{registration.creator.name}</span>
                <span className="col">{`\u2713 Time: ${registration.time}`}</span>
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
  fetchRegistrations: () => {
    dispatch(eventsActions.fetchRegistrations());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Registrations);
