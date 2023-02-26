import React from 'react';
import { connect } from 'react-redux';
import WitchRedirect from '../../Common/WitchRedirect';
import ProfileClass from '../../Components/ProfileClass';
import { getUserProfileThunkCreator } from '../../Redux/Reducers/profile-reducer';
import s from './profileClassContainer.module.css';

class ProfileClassContainer extends React.Component {

   componentDidMount() {
      this.props.getUserProfile(this.props.id || 17539);
   }

   render() {
      return (
         <WitchRedirect>
            <ProfileClass profile={this.props.profile} increment={this.props.increment} />
         </WitchRedirect>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      profile: state.profileReducer.profile,
      id: state.authReducer.id,
      increment: 1
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      getUserProfile: (userId) => dispatch(getUserProfileThunkCreator(userId)),
   }
}

//const withRouterContainerComponent = withRouter(ProfileClassContainer);
export default connect(mapStateToProps, mapDispatchToProps)(ProfileClassContainer);