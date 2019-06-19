import /* we need our action types here*/ * as actions from "../actions/actions";
const initialState = {
  characters: [],
  loading: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case actions.INIT_CHARACTER : 
      return {
        ...state,
        loading: action.payload
      }
    case actions.FETCH_SUCCESS:
      return {
        ...state,
        characters: action.payload
      }
    case actions.FETCH_ERROR: 
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
