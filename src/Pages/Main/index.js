import React from 'react';
import ContentContainer from '../../Common/ContentContainer';
import NavLinkComponent from '../../Components/NavLinkComponent';
import { Route, Routes } from 'react-router-dom';
import { ROUTER } from '../../config';
import PostContainer from '../../Pages/PostContainer';
import Dialogs from '../../Pages/Dialogs';
import s from './Main.module.css';
import UsersContainer from '../UsersContainer';
import UsersContainerClass from '../UsersContainerClass';
import ProfileContainer from '../ProfileContainer';
import ProfileClassContainer from '../ProfileClassContainer';
import Login from '../Login/index';

const Main = (props) => {

   return (
      <div className={s.mainContainer}>
         <ContentContainer>
            <div className={s.siteBarContainer}>
               <NavLinkComponent />
               <Routes>
                  <Route path={ROUTER.profile} element={<ProfileContainer />} />
                  <Route path={ROUTER.profileClass} element={<ProfileClassContainer />} />
                  <Route path={ROUTER.posts} element={<PostContainer />} />
                  <Route path={ROUTER.dialogs} element={<Dialogs />} />
                  <Route path={ROUTER.users} element={<UsersContainer />} />
                  <Route path={ROUTER.usersClass} element={<UsersContainerClass />} />
                  <Route path={ROUTER.login} element={<Login />} />
               </Routes>
            </div>

         </ContentContainer>
      </div>
   )
}
export default Main;