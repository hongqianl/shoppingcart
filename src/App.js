import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import {Header, Footer} from './components/';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div>
    <BrowserRouter>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
