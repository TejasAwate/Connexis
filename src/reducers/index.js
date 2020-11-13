import { combineReducers } from 'redux';
import { users, usersHaveError, usersAreLoading } from './users';
import { user } from './user';

export default combineReducers({
  users,
  usersHaveError,
  usersAreLoading,
  user,
});
