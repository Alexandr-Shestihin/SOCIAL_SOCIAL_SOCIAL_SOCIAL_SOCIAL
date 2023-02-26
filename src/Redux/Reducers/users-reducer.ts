import { photosType } from '../../types/ReduceType';
import { API } from '../../API/index';

const CHANGE_FOLLOW = "CHANGE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_PAGE_COUNT = "SET_TOTAL_PAGE_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

type UsersArr = {
   followed: boolean,
   id: number,
   name: string,
   photos: photosType,
   status: null | string,
   uniqueUrlName: null | string
}
const initialState = {
   users: [] as Array<UsersArr> | [],
   pageSize: 100 as number,
   currentPage: 1 as number,
   totalUsersCount: 0 as number,
}

type initialStateType = typeof initialState;
const usersReducer = (state = initialState, action: any): initialStateType => {
   switch (action.type) {
      case CHANGE_FOLLOW:
         return {
            ...state,
            users: state.users.map(el => {
               if (action.userID === el.id) {
                  return {
                     ...el,
                     followed: !el.followed
                  }
               }
               return el;
            })
         };

      case SET_USERS:
         return {
            ...state,
            users: [...action.users]
         }

      case SET_TOTAL_PAGE_COUNT:
         return {
            ...state,
            totalUsersCount: action.totalCount,
         }

      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage,
         }

      default:
         return state;
   }
}

type changeFollowACType = { type: typeof CHANGE_FOLLOW, userID: number }
export const changeFollowAC = (userID: number): changeFollowACType => {
   return { type: CHANGE_FOLLOW, userID: userID }
}
type setUsersACType = { type: typeof SET_USERS, users: Array<UsersArr> }
export const setUsersAC = (users: Array<UsersArr>): setUsersACType => {
   return { type: SET_USERS, users: users }
}
type setTotalCountACType = { type: typeof SET_TOTAL_PAGE_COUNT, totalCount: number }
export const setTotalCountAC = (totalCount: number): setTotalCountACType => {
   return { type: SET_TOTAL_PAGE_COUNT, totalCount: totalCount }
}
type setCurrentPageACType = { type: typeof SET_CURRENT_PAGE, currentPage: number }
export const setCurrentPageAC = (currentPage: number): setCurrentPageACType => {
   return { type: SET_CURRENT_PAGE, currentPage: currentPage }
}

export const getUsersThunkCreator = (pageSize: number, currentPage: number) => {
   return (dispatch: any) => {
      API.users.getUsers(pageSize, currentPage)
         .then(res => {
            dispatch(setUsersAC(res.data.items));
            dispatch(setTotalCountAC(res.data.totalCount));
         });
   }
}

export default usersReducer;