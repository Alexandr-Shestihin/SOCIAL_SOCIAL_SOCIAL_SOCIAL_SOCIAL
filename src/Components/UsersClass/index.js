import React from 'react';
import User from '../User';

class UsersClass extends React.Component {

   render() {

      return (
         <div>

            <div>
               {this.props.page > 1 ? <div>
                  {this.props.getButton(this.props.page)}
               </div> : false}
            </div>

            {this.props.users.map(el => <User
               key={el.id}
               id={el.id}
               name={el.name}
               followed={el.followed}
               onChangeFollowed={this.props.onChangeFollowed}
            />)}

         </div>
      )

   }
}
export default UsersClass;