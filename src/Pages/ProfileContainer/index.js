import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, Navigate } from 'react-router-dom';
import { API } from '../../API';
import WitchRedirect from '../../Common/WitchRedirect';
import Profile from '../../Components/Profile';
import { getUserProfileThunkCreator } from '../../Redux/Reducers/profile-reducer';
import s from './profileContainer.module.css';

const ProfileContainer = (props) => {

   const dispatch = useDispatch();
   const profile = useSelector(el => el.profileReducer.profile);
   const currentUserID = useSelector(el => el.authReducer.id);
   const userID = useParams().userID;
   console.log(userID)

   useEffect(() => {
      dispatch(getUserProfileThunkCreator(userID || currentUserID));

   }, [currentUserID])

   return (
      <WitchRedirect>
         <Profile profile={profile} />
      </WitchRedirect>
   )
}
export default ProfileContainer;