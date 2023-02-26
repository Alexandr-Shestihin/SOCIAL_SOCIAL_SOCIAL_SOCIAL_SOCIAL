import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './Reducers/profile-reducer';
import postReducer from './Reducers/post-reducer';
import usersReducer from "./Reducers/users-reducer";
import authReducer from "./Reducers/auth-reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
   profileReducer,
   postReducer,
   usersReducer,
   authReducer,
})

const store = createStore(reducer, applyMiddleware(thunk));
export default store;