import React from 'react';
import Dialog from '../../Components/Dialog';
import { dialogs } from './const';
import s from './Users.module.css';

const Dialogs = (props) => {
   console.log(dialogs)
   return (
      <div>
         {dialogs.map(el => <Dialog name={el.name} id={el.id} />)}
      </div>
   )
}
export default Dialogs;