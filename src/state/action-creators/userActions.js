// userActions.js
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const INCREMENT_AMOUNT = 'INCREMENT_AMOUNT';
export const DECREMENT_AMOUNT = 'DECREMENT_AMOUNT';
export const UPDATE_NAME='UPDATE_NAME';
export const UPDATE_EMAIL='UPDATE_EMAIL';
export const SET_USERID='SET_USERID';
export const ADD_PHONE_NUMBER='ADD_PHONE_NUMBER';
export const APP_CONFIGURE='APP_CONFIGURE';

export const loginUser = () => ({
  type: LOGIN_USER,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const incrementAmount = (value) => ({
  type: INCREMENT_AMOUNT,
  payload: value, // Payload to specify the amount to increment
});
export const decrementAmount = (value) => ({
  type: DECREMENT_AMOUNT,
  payload: value, // Payload to specify the amount to increment
});
export const updateName = (value) => ({
  type: UPDATE_NAME,
  payload: value, // Payload to specify the amount to decrement
});
export const updateEmail = (value) => ({
  type: UPDATE_EMAIL,
  payload: value, // Payload to specify the amount to decrement
});
export const setUserId = (value) => ({
  type: SET_USERID,
  payload: value, // Payload to specify the amount to decrement
});
export const updatePhoneNumber = (value) => ({
  type: ADD_PHONE_NUMBER,
  payload: value, // Payload to specify the amount to decrement
});
export const updateAppConfig = (value) => ({
  type: APP_CONFIGURE,
  payload: value, // Payload to specify the amount to decrement
});

