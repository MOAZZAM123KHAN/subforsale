// userReducer.js
import {
  //LoginStatus
  LOGIN_USER,
  LOGOUT_USER,
  //Amount
  INCREMENT_AMOUNT,
  DECREMENT_AMOUNT,
  //Full Name
  UPDATE_NAME,
  //Email
  UPDATE_EMAIL,
  //USER Id
  SET_USERID,
  //Phone Number
  ADD_PHONE_NUMBER,
  //Configuration
  APP_CONFIGURE,
} from "../action-creators/userActions";

const initialState = {
  name: null,
  userId:null,
  lastName: null,
  email: null,
  userId: null,
  phoneNumber: null,
  loginStatus: false,
  configuration: null,
  amount: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginStatus: true,
      };
    case LOGOUT_USER:
      return {
        ...initialState,
        loginStatus: false,
      };
    case INCREMENT_AMOUNT:
      return {
        ...state,
        amount: state.amount + action.payload, // Use the payload to increment the amount
      };
    case DECREMENT_AMOUNT:
      return {
        ...state,
        amount: state.amount - action.payload, // Use the payload to decrement the amount
      };
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload, // Use the payload to update Name
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload, // Use the payload to decrement the amount
      };

    case SET_USERID:
      return {
        ...state,
        userId:action.payload, // Use the payload to decrement the amount
      };
    case ADD_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber:action.payload, // Use the payload to decrement the amount
      };
    case APP_CONFIGURE:
      return {
        ...state,
        configuration: action.payload, // Use the payload to decrement the amount
      };
    default:
      return state;
  }
};

export default userReducer;
