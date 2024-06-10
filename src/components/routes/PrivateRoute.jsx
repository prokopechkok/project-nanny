import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../Loader/Loader';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

export const PrivateRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        toast.info('You need to be logged in to visit this page.');
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};
