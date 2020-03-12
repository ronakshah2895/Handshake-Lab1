const initialState = {
  events: [],
  filteredEvents: [],
  registrations: [],
  selectedEvent: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EVENTS':
      return {
        ...state,
        events: [...action.events],
        filteredEvents: [...action.events],
      };
    case 'CREATE_EVENT':
      return {
        ...state,
        events: state.events.concat([action.event]),
      };
    case 'UPDATE_SELECTED_EVENT':
      return {
        ...state,
        selectedEvent: action.selectedEvent,
      };
    case 'REGISTER_EVENT':
      return {
        ...state,
        filteredEvents: state.events.filter((event) => event.id !== action.eventId),
      };
    case 'FETCH_REGISTRATIONS':
      return {
        ...state,
        registrations: [...action.registrations],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
