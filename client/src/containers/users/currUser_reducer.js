function currUser(state = {}, action) {
  switch (action.type) {
    case "GET_SINGLE_USER_SUCCEEDED":
      return action.result.length ? action.result[0] : {};
    default:
      return state;
  }
}
export default currUser;