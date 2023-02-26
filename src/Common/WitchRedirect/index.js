import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const WitchRedirect = ({ children }) => {

   const isAuth = useSelector(el => el.authReducer.isAuth);
   const navigate = useNavigate();
   console.log(!isAuth)

   const redirect = () => {
      if (!isAuth) {
         navigate('/login');
         console.log('Не залогинен')
      }
   }

   useEffect(() => {
      redirect()
   }, [])

   return (
      <>
         {children}
      </>
   )
}
export default WitchRedirect;