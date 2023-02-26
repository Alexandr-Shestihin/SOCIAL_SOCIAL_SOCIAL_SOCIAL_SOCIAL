import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../config';
import s from './user.module.css';

const User = (props) => {

   return (
      <div>
         <NavLink
            to={ROUTER.profile.replace(':userID?', '') + props.id}
         >
            <div>{props.name}</div>
         </NavLink>
         {
            props.followed ?
               <button
                  onClick={() => props.onChangeFollowed(props.id)}
                  className={s.btnUnfollowed}
               >Отписаться</button>
               : <button
                  onClick={() => props.onChangeFollowed(props.id)}
                  className={s.btnFollow}
               >Подписаться</button>
         }
      </div>
   )
}
export default User;