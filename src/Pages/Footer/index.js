import React from 'react';
import ContentContainer from '../../Common/ContentContainer';
import s from './footer.module.css';

const Footer = (props) => {
   return (
      <div style={{ background: 'rgb(11, 15, 143)', color: "white" }}>
         <ContentContainer>
            <div className={s.footerContainer}>
               Footer
            </div>
         </ContentContainer>
      </div>
   )
}
export default Footer;