import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Feeds from './components/Feeds';
import AuthProvider from './components/AuthProvider';
import Profile from './components/Profile';
import RequiredAuth from './components/RequiredAuth';
import Buy from './components/Buy';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Navbar/>
        <Routes>
         <Route path="/"element={<Home/>}/>
         <Route path="/Signup"element={<Signup/>}/>
         <Route path="/login"element={<Login/>}/>
         <Route path='/profile'element={<RequiredAuth><Profile/></RequiredAuth>}/>
         <Route path='/buy'element={<RequiredAuth><Buy/></RequiredAuth>}/>
         <Route path="/about"element={<About/>}/>
         <Route path='/feeds' element={<Feeds/>}/>

         <Route path="/contact"element={<Contact/>}/>
         
        </Routes>
      </AuthProvider>
    
     
    </div>
  );
}

export default App;
