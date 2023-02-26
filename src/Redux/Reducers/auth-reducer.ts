import { API } from "../../API";

const SET_AUTH_DATA = "SET_AUTH_DATA";

const initialState = {
   login: null as null | string,
   email: null as null | string,
   id: null as null | number,
   isAuth: false as boolean,
}

type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {
   switch (action.type) {
      case SET_AUTH_DATA:
         return {
            ...state,
            login: action.login,
            email: action.email,
            id: action.id,
            isAuth: true,
         }

      default:
         return state;
   }
}

type setAuthDataACType = {
   type: typeof SET_AUTH_DATA,
   login: string | null,
   email: string | null,
   id: number | null,
}
export const setAuthDataAC = (login: string, email: string, id: number): setAuthDataACType => {
   return { type: SET_AUTH_DATA, login, email, id }
}

export const getCurrentUserInfoThunkCreator = () => {
   return (dispatch: any) => {
      API.auth.getInfo()
         .then(res => {
            console.log(res.data.resultCode)
            if (!res.data.resultCode) {
               const { login, email, id } = res.data.data;
               dispatch(setAuthDataAC(login, email, id));
            }
         })
   }
}

export default authReducer;