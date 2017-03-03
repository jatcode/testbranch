const formLoader = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_FORM_SUCCEEDED':
			console.log(action.result[0]);
			return  action.result.length ? action.result[0] : {};
    default:
      return state
  }
}

export default formLoader