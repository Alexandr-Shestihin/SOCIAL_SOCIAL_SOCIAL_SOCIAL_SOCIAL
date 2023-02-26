import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import s from './NavLinkComponent.module.css';

const NavLinkComponent = (props) => {
   const getNavStyleData = (NavData) => {
      return NavData.isActive ? `${s.active} ${s.link}` : s.link
   }
   return (
      <div className={s.container}>
         <div>
            <NavLink
               to={ROUTER.profile.replace('/:userID?', '')}
               className={(NavData) => getNavStyleData(NavData)}
            >Profile</NavLink>
         </div>
         <div>
            <NavLink
               to={ROUTER.profileClass.replace('/:userID?', '')}
               className={(NavData) => getNavStyleData(NavData)}
            >Profile class</NavLink>
         </div>
         <div>
            <NavLink
               to={ROUTER.posts}
               className={(NavData) => getNavStyleData(NavData)}
            >Posts</NavLink>
         </div>
         <div>
            <NavLink
               to={ROUTER.dialogs.replace('/*', '')}
               className={(NavData) => getNavStyleData(NavData)}
            >Dialogs</NavLink>
         </div>
         <div>
            <NavLink
               to={ROUTER.users}
               className={(NavData) => getNavStyleData(NavData)}
            >Users</NavLink>
         </div>
         <div>
            <NavLink
               to={ROUTER.usersClass}
               className={(NavData) => getNavStyleData(NavData)}
            >Users class</NavLink>
         </div>
      </div>
   )
}
export default NavLinkComponent;