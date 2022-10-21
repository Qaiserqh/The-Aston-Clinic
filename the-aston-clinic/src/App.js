import './App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './Utilities/Navbar.css'
import Treatments from './screens/Treatments';
import BookingScreen from './screens/BookingScreen'
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <div className='App'>
        <Navbar />
        <BrowserRouter>
            <Route path='/treatments' exact component={Treatments} />
            <Route path='/book/:treatmentsid' exact component={BookingScreen}/>
            <Route path='/login' excat component={Login}/>
            <Route path='/register' exact component={Register}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
