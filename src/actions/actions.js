import axios from 'axios';

export function usersHaveError(bool) {
  return {
    type: 'USERS_HAVE_ERROR',
    hasError: bool,
  };
}

export function usersAreLoading(bool) {
  return {
    type: 'USERS_ARE_LOADING',
    isLoading: bool,
  };
}

export function usersFetchDataSuccess(users) {
  return {
    type: 'USERS_FETCH_DATA_SUCCESS',
    users,
  };
}

export function usersFetchData(url) {
  return (dispatch) => {
    dispatch(usersAreLoading(true));

    axios
      .get(url)
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(usersAreLoading(false));
        return response;
      })
      .then((response) => dispatch(usersFetchDataSuccess(response.data)))
      .catch(() => dispatch(usersHaveError(true)));
  };
}

export function userFetchDataSuccess(user) {
  return {
    type: 'USER_FETCH_DATA_SUCCESS',
    user,
  };
}

export function userFetchData(url) {
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => dispatch(userFetchDataSuccess(response.data)));
  };
}

export function userPostDataSuccess(user) {
  return {
    type: 'USER_POST_DATA_SUCCESS',
    user,
  };
}

export function userPostData(url, payload) {
  return (dispatch) => {
    axios
      .put(url, payload)
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => dispatch(userPostDataSuccess(response.data)));
  };
}
