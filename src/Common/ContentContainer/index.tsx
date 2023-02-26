import React, { FC } from 'react';
import s from './ContentContainer.module.css';

type props = {
   children: React.ReactNode
}
const ContentContainer: FC<props> = (props) => {

   return (
      <div className={s.mainContainer}>
         {props.children}
      </div>
   )
}
export default ContentContainer;