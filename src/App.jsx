import Navbar from './Navbar.jsx';
import MessageBoard from './MessageBoard.jsx';
import Signup from './auth/Signup.jsx';
import Login from './auth/Login.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import About from './About.jsx';
import {Route, Routes, useNavigate} from 'react-router-dom';
import { auth } from './lib/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import {useState, useEffect} from 'react';

function App() {

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // User is signed in
        if (window.location.pathname !== '/message-board') {
          navigate('/message-board'); // Only navigate if not already on this page
        }
      } else {
        setUser(null); // User is signed out
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, [auth]);

  return (
  <>
  <Routes>
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route
        path="/message-board"
        element={
          <PrivateRoute>
          <Navbar/>
          <MessageBoard/>
        </PrivateRoute>
        }
      />
    <Route
    path="/about"
    element={
      <PrivateRoute>
      <Navbar/>
      <About/>
    </PrivateRoute>
    }
   />

  </Routes>
  </>
  )
}

export default App
