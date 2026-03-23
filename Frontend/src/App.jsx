import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
// React Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Home and Auth
import Hero from  './Components/Hero';
import Navbar from './Components/Navbar';
// Pages
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import Chat from './pages/Chat';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';

const App = () => {
  return (
    <>
      <HashRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          {/* Home & Auth */}
          <Route exact path='/' element={<Hero />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          {/* Pages */}
          <Route exact path='/about' element={<About />} />
          <Route exact path='/chat' element={<Chat />} />
          <Route exact path='/forget-password' element={<ForgetPassword/>} />
          <Route exact path='/reset-password/:token' element={<ResetPassword/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;