/* global $ */
import { sendPost } from '../../helpers/communicationHelper';

export const fetchEvents = () => (dispatch) => {
  sendPost('events/get_events').then((events) => {
    dispatch({
      events,
      type: 'FETCH_EVENTS',
    });
  });
};

export const createEvent = (ev) => (dispatch) => {
  const { target } = ev;
  sendPost('events/create_event', target).then((event) => {
    target.reset();
    $('.modal').modal('hide');
    dispatch({
      event,
      type: 'CREATE_EVENT',
    });
  });
};
