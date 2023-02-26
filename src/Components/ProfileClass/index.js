import React from 'react';
import s from './profile.module.css';

class ProfileClass extends React.Component {

   constructor(props) {
      super(props);
      this.state = { counter: 0 };
   }
   componentDidMount() {
      this.setState((state, props) => ({
         counter: this.state.counter + this.props.increment
      }))
   }
   render() {

      console.log(this.state.counter);


      return (
         <div className={s.container}>
            {this.props.profile?.photos.large ?
               <div><img src={this.props.profile?.photos.large} alt="photo" /></div> : false}
            <div className={s.containerInfo}>
               <div>Name: {this.props.profile?.fullName}</div>
               <div>AboutMe: {this.props.profile?.aboutMe}</div>
            </div>
         </div>
      )

   }

}
export default ProfileClass;