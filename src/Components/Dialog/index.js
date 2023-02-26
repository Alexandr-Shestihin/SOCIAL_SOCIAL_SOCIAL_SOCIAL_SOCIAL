import React from 'react';
import { useHistory } from "react-router";
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
   //const hist = useHistory();
   /* function goToUrl(url) {
      history.push(url);
   } */
   return (
      <div>
         <NavLink to={`${props.id}`}>
            {props.name}
         </NavLink>
      </div>
   )
}
export default Dialogs;