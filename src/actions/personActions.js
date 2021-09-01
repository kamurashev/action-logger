import {
  GET_PERSONS,
  ADD_PERSON,
  DELETE_PERSON,
  SET_LOADING,
  PERSONS_ERROR,
} from './types';

const getPersons = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${process.env.PUBLIC_URL}/api/persons`);
    const data = await res.json();
    dispatch({ type: GET_PERSONS, payload: data });
  } catch (err) {
    dispatch({ type: PERSONS_ERROR, payload: err.response.statusText });
  }
};

const addPerson = (person) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${process.env.PUBLIC_URL}/api/persons` , {
      method: 'POST',
      body: JSON.stringify(person),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    dispatch({ type: ADD_PERSON, payload: data });
  } catch (err) {
    dispatch({ type: PERSONS_ERROR, payload: err.response.statusText });
  }
};

const deletePerson = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`${process.env.PUBLIC_URL}/api/persons/${id}`, {method: 'DELETE'});
    dispatch({ type: DELETE_PERSON, payload: id });
  } catch (err) {
    dispatch({ type: PERSONS_ERROR, payload: err.response.statusText });
  }
};

const setLoading = () => ({ type: SET_LOADING });

export { getPersons, addPerson, deletePerson, setLoading };
