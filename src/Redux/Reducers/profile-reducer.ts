import { profileType } from './../../types/ReduceType';
import { API } from "../../API";

const SET_PROFILE_DATA = 'SET_PROFILE_DATA';

const initialState = {
   profile: null as profileType | null,
}

type initialStateType = typeof initialState;
const profileReducer = (state = initialState, action: any): initialStateType => {
   switch (action.type) {
      case SET_PROFILE_DATA:
         return {
            ...state,
            profile: { ...action.profile }
         }

      default:
         return state;
   }
}

type setProfileDataACType = { type: typeof SET_PROFILE_DATA, profile: profileType }
export const setProfileDataAC = (profile: profileType): setProfileDataACType => {
   return { type: SET_PROFILE_DATA, profile }
}

export const getUserProfileThunkCreator = (userId: number) => {
   return (dispatch: any) => API.profile.getUserProfile(userId)
      .then(res => dispatch(setProfileDataAC(res.data)))
}
export default profileReducer;