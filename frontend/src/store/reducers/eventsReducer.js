const initialState = {
  events: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EVENTS':
      return {
        ...state,
        events: [...action.events],
      };
    case 'CREATE_EVENT':
      return {
        ...state,
        events: state.events.concat([action.event]),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
