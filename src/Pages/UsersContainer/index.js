import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API } from '../../API';
import Users from '../../Components/Users';
import { changeFollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC, getUsersThunkCreator } from '../../Redux/Reducers/users-reducer';
import s from './UsersContainer.module.css';

const UsersContainer = (props) => {
   //dispatch - ф-ия, которая передаёт текущее состояние и передает действие через редьюсер
   const dispatch = useDispatch();

   //хук useSelector возвращает состояние
   const users = useSelector(el => el.usersReducer.users);
   const currentPage = useSelector(el => el.usersReducer.currentPage);
   const totalUsersCount = useSelector(el => el.usersReducer.totalUsersCount);
   const pageSize = useSelector(el => el.usersReducer.pageSize);

   const getUsers = (pageSize, currentPage) => dispatch(getUsersThunkCreator(pageSize, currentPage));
   //Санка

   useEffect(() => {
      getUsers(pageSize, currentPage);
   }, [])

   const onChangeFollowed = (userID) => {
      dispatch(changeFollowAC(userID));
   }
   const setCurrentPage = (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
   }

   const page = Math.ceil(totalUsersCount / pageSize);

   const getButton = (array) => {
      const pageArr = [];
      for (let i = 1; i <= array; i++) {
         pageArr.push(i);
      }
      return pageArr.map((el, i) => <button
         className={currentPage == el ? s.activeButton : false}
         onClick={() => {
            setCurrentPage(el);
            getUsers(props.pageSize, el);
         }}
      >{el}</button>)
   }

   return (
      <Users
         page={page}
         users={users}
         getButton={getButton}
         onChangeFollowed={onChangeFollowed}
      />
   )
}
export default UsersContainer;