export default function (state = {
  user: {
    id: null,
    name: null,
  },
  fetching: false,
  fetched: false,
  error: null,
}, action) {
    switch(action.type) {
      case 'FETCH_USER': {
        return { ...state, fetching: true}
        break;
      }
      case 'FETCH_USER_REJECTED': {
        return { ...state, fetching: false, error: action.payload}
        break;
      }
      case 'FETCH_USER_FULLIFIED': {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload
        }
        break;
      }

      default: {
        return state;
      }
    }
}
