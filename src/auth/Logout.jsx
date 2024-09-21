import React from 'react';
import { auth } from '.././lib/firebase.js';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Logout(){

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/login');
    }).catch((error) => {
      console.error('Error logging out:', error);
    });
  };

  return (
    <Link onClick={handleLogout}>Logout</Link>
  );
};

export default Logout;
