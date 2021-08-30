import { combineReducers } from 'redux';
import logReducer from './logReducer';
import personReducer from './personReducer';

export default combineReducers({
  log: logReducer,
  person: personReducer
});
