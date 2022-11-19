const FETCH_GREETINGS = 'greeting/FETCH_GREETINGS';

export default function greetingsReducer(state = [], action = {}) {
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.payload;
    default:
      return state;
  }
}

function fetchGreetings() {
  return async (dispatch) => {
    const response = await fetch('http://localhost:4000/api/v1/greetings');
    const greetings = await response.json();
    
    dispatch({
      type: FETCH_GREETINGS,
      payload: greetings,
    });
  };
}

export { fetchGreetings };