const INITIAL_STATE = {
  notificationIsShown: false,
  notificationType: '',
  notificationMessage: ''
};

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'SHOW_NOTIFICATION':
      return {
        ...state,
        ...action.notification,
        notificationIsShown: true,
      };

    case 'CLOSE_NOTIFICATION':
      return {
        notificationType: '',
        notificationMessage: '',
        notificationIsShown: false
      };

    default:
      return state
  }
};

export default notificationReducer;