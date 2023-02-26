import './App.css';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Main from './Pages/Main';

function App(props) {
   return (
      <div className="App">
         <Header />
         <Main />
         <Footer />
      </div>
   );
}

export default App;