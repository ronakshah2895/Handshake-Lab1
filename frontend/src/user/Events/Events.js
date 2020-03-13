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
    const {
      events, selectedEvent, updateSelected, registerEvent, applyFilter,
    } = this.props;
    return (
      <div className="EVENTS_U container">
        <div className="mt-2">
          <input type="text" className="col form-control" onChange={applyFilter} id="filterName" placeholder="Name" />
        </div>
        { events.map((event, index) => (
          <div className="card" key={`event-${index + 1}`}>
            <div className="card-header">
              <div className="d-inline-block">
                <h5>{event.name}</h5>
                <Link to={`/profile/${event.creator.email}`}>{event.creator.name}</Link>
              </div>
              <button type="button" onClick={updateSelected.bind(null, event.id)} data-toggle="modal" data-target="#registerEvent" className="btn btn-primary float-right">Register</button>
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

        <div className="modal" id="registerEvent" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Register for Event</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={registerEvent}>
                <div className="modal-body">
                  <p>Are you sure you want to register for the event?</p>
                  <input type="hidden" name="eventId" id="inputEventId" value={selectedEvent} />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">Yes</button>
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
  events: state.eventsReducer.filteredEvents,
  selectedEvent: state.eventsReducer.selectedEvent,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => {
    dispatch(eventActions.fetchEvents());
  },
  registerEvent: (ev) => {
    ev.preventDefault();
    dispatch(eventActions.registerEvent(ev));
  },
  updateSelected: (selectedEvent) => {
    dispatch(eventActions.updateSelected(selectedEvent));
  },
  applyFilter: (ev) => {
    dispatch(eventActions.applyFilter(ev));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
