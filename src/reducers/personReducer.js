import {
  GET_PERSONS,
  ADD_PERSON,
  DELETE_PERSON,
  SET_LOADING,
  PERSONS_ERROR,
} from '../actions/types';

const initialState = {
  persons: null,
  loading: false,
  error: null,
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONS:
      return { ...state, persons: action.payload, loading: false };
    case ADD_PERSON:
      return {
        ...state,
        persons: [...state.persons, action.payload],
        loading: false
      };
    case DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter(p => p.id !== action.payload),
        loading: false
      };
    case PERSONS_ERROR:
      console.error(action.payload);
      return { ...state, error: action.payload };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default personReducer;
