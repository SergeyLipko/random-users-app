import { showNotification } from '../notification';

export const setUsers = users => ({
  type: 'SET_USERS',
  users
});

export const startLoading = () => ({
  type: 'START_LOADING',
});

export const stopLoading = () => ({
  type: 'STOP_LOADING',
});

export const loadUsers = page => dispatch => {
  dispatch(startLoading());

  return fetch(`https://randomuser.me/api/?seed=1&page=${page}&results=40`)
    .then(res => res.json())
    .then(res => {
      dispatch(setUsers(res.results));
      dispatch(stopLoading());
    })
    .catch(err => {
      dispatch(stopLoading());
      dispatch(showNotification({
        notificationType: 'ERROR',
        notificationMessage: err
      }))
    });
};