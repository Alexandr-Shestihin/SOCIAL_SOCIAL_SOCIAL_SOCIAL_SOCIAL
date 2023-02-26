import React from 'react';
import User from '../User';

const Users = (props) => {

   return (
      <div>

         <div>
            {props.page > 1 ? <div>
               {props.getButton(props.page)}
            </div> : false}
         </div>

         {props.users.map(el => <User
            key={el.id}
            id={el.id}
            name={el.name}
            followed={el.followed}
            onChangeFollowed={props.onChangeFollowed}
         />)}

      </div>
   )
}
export default Users;