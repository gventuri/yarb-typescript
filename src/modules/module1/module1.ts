// ------------------------------------
// Constants

const API_URL = 'https://api.example.com/path';

const FETCH_SUCCESS = 'module1/FETCH_SUCCESS';
const FETCH_FAILURE = 'module1/FETCH_FAILURE';

// ------------------------------------
// Action creators

function fetchSuccess(result: object) {
  return {
    type: FETCH_SUCCESS,
    payload: result
  };
}

function fetchFailure(error: string) {
  return {
    type: FETCH_FAILURE,
    payload: error
  };
}

export function fetchAPI() {
  return async (dispatch: any) => {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
      return dispatch(fetchFailure('Unable to fetch'));
    }

    try {
      const result = await response.json();
      dispatch(fetchSuccess(result));
    } catch (error) {
      dispatch(fetchFailure(error.message));
    }
  };
}

// ------------------------------------
// Selectors

export const getResult = (state: any) => state.result;

// ------------------------------------
// Store & reducer

const initialState = {
  loaded: true
};

export default function reducer(state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        result: payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: payload
      };

    default:
      return state;
  }
}

// ------------------------------------
// Testing variables

export const testing = {
  url: API_URL
};
