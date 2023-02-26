import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import UsersClass from '../../Components/UsersClass';
import { changeFollowAC, setUsersAC, setTotalCountAC, setCurrentPageAC, getUsersThunkCreator } from '../../Redux/Reducers/users-reducer';
import s from './UsersContainerClass.module.css';

class UsersClassContainer extends React.Component {

   componentDidMount() {
      this.props.getUsers(this.props.pageSize, this.props.currentPage);
      /*  this.props.getUsers(this.props.pageSize, this.props.currentPage)
          .then(res => {
             this.props.setUsers(res.items);
             this.props.setTotalCount(res.totalCount);
          }); */
   }

   render() {

      const page = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

      const getButton = (array) => {
         const pageArr = [];
         for (let i = 1; i <= array; i++) {
            pageArr.push(i);
         }
         return pageArr.map((el) => <button
            className={this.props.currentPage == el ? s.activeButton : false}
            onClick={() => {
               this.props.setCurrentPage(el);
               this.props.getUsers(this.props.pageSize, el);
            }}
         >{el}</button>)
      }
      return (
         <UsersClass
            page={page}
            users={this.props.users}
            getButton={getButton}
         />
      )
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.usersReducer.users,
      pageSize: state.usersReducer.pageSize,
      currentPage: state.usersReducer.currentPage,
      totalUsersCount: state.usersReducer.totalUsersCount,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onChangeFollowed: (userID) => {
         dispatch(changeFollowAC(userID))
      },
      setUsers: (data) => dispatch(setUsersAC(data)),
      setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),

      //Санка
      getUsers: (pageSize, currentPage) => dispatch(getUsersThunkCreator(pageSize, currentPage)),
      //Санка

      setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
      setTotalCount: (totalCount) => {
         dispatch(setTotalCountAC(totalCount))
      },
      setCurrentPage: (currentPage) => {
         dispatch(setCurrentPageAC(currentPage))
      }
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer);