import {
  GET_LOGS,
  SEARCH_LOGS,
  ADD_LOG,
  UPDATE_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_LOADING,
  LOGS_ERROR,
} from './types';

const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${process.env.PUBLIC_URL}/api/logs`);
    const data = await res.json();
    dispatch({ type: GET_LOGS, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
  }
};

const searchLogs = (query) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${process.env.PUBLIC_URL}/api/logs?q=${query}`);
    const data = await res.json();
    dispatch({ type: SEARCH_LOGS, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
  }
};

const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${process.env.PUBLIC_URL}/api/logs`, {
      method: 'POST',
      body: JSON.stringify(log),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    dispatch({ type: ADD_LOG, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
  }
};

const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`${process.env.PUBLIC_URL}/api/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    dispatch({ type: UPDATE_LOG, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
  }
};

const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`${process.env.PUBLIC_URL}/api/logs/${id}`, { method: 'DELETE' });
    dispatch({ type: DELETE_LOG, payload: id });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
  }
};

const setCurrent = (log) => ({ type: SET_CURRENT, payload: log });

const clearCurrent = () => ({ type: CLEAR_CURRENT });

const setLoading = () => ({ type: SET_LOADING });

export {
  getLogs,
  searchLogs,
  addLog,
  updateLog,
  deleteLog,
  setCurrent,
  clearCurrent,
  setLoading,
};
