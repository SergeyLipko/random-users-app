import { combineReducers } from 'redux'
import users from './users';
import notification from './notification';

const rootReducer = combineReducers({
  users,
  notification
});

export default rootReducer;