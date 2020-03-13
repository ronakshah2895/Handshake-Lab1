import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as eventActions from '../../store/actions/eventsActions';
import './Events.css';

class Events extends React.Component {
  componentDidMount() {
    const { fetchEvents } = this.props;
    fetchEvents();
  }

  render() {
    const { events, createEvent } = this.props;
    return (
      <div className="EVENTS_C container">
        <button type="button" data-toggle="modal" data-target="#createEvent" className="btn btn-primary mt-2">Create Event</button>
        { events.map((event, index) => (
          <div className="card" key={`event-${index + 1}`}>
            <div className="card-header">
              <div className="d-inline-block">
                <h5>{event.name}</h5>
                <span>{event.creator.name}</span>
              </div>
              <Link to={`registrations/${event.id}`}><button type="button" className="btn btn-primary float-right">View Registrations</button></Link>
            </div>
            <div className="card-body">
              <div className="row">
                <span className="col">{`\uD83D\uDCCC ${event.location}`}</span>
                <span className="col">{`\uD83D\uDD51 Posted on ${event.time}`}</span>
              </div>
              <p>{event.description}</p>
            </div>
          </div>
        ))}

        <div className="modal" id="createEvent" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Event</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={createEvent}>
                <div className="modal-body">
                  <input type="text" name="name" id="inputName" className="form-control" placeholder="Name" required />
                  <input type="datetime-local" name="time" id="inputTime" className="form-control" placeholder="Time" required />
                  <input type="text" name="location" id="inputLocation" className="form-control" placeholder="Location" required />
                  <input type="text" name="eligibility" id="inputEligibility" className="form-control" placeholder="Eligibility" />
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.eventsReducer.events,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => {
    dispatch(eventActions.fetchEvents());
  },
  createEvent: (ev) => {
    ev.preventDefault();
    dispatch(eventActions.createEvent(ev));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
