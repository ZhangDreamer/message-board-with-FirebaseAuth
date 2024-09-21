import { Navigate } from 'react-router-dom';
import { auth } from './lib/firebase.js';

function PrivateRoute({ children }){
  return auth.currentUser ? children : <Navigate to="/signup" />;
};

export default PrivateRoute
