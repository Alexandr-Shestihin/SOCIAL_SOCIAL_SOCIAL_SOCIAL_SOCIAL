import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderAllTree = () => {
   root.render(
      <Provider store={store}>
         <React.StrictMode>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </React.StrictMode>
      </Provider>
   );
}
rerenderAllTree();
store.subscribe(rerenderAllTree);


/* store.subscribe(() => root.render(<App />));

reportWebVitals(); */
