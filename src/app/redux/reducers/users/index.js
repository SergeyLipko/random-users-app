const INITIAL_STATE = {
  usersList: [],
  isLoading: false,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'SET_USERS':
      return {
        ...state,
        usersList: [
          ...state.usersList,
          ...action.users
        ]
      };

    case 'START_LOADING':
      return {
        ...state,
        isLoading: true
      };

    case 'STOP_LOADING':
      return {
        ...state,
        isLoading: false
      };

    default:
      return state
  }
};

export default usersReducer;