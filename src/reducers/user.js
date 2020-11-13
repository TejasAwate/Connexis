export function user(state = [], action) {
  switch (action.type) {
    case 'USER_FETCH_DATA_SUCCESS':
      return action.user;

    default:
      return state;
  }
}
