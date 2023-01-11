import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/reduxHooks';
import { setUserId } from '../store/main/main.actions';
import { useSession } from '../hooks/useSession';

const LoginPage = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { save } = useSession('todo-app-user');

  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        dispatch(setUserId(response.user.uid));
        navigate('/');
        save(response.user.uid);
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <div className="bg-slate-800 h-screen w-screen flex items-center justify-center">
      <div className="bg-slate-700 max-w-[31.25rem] px-10 py-8 text-center text-white flex flex-col items-center justify-center rounded-md">
        <h2 className="text-2xl font-semibold my-5">Sign into the App using Google account</h2>
        {authing ? (
          <p>Logging in...</p>
        ) : (
          <GoogleButton
            onClick={() => {
              signInWithGoogle();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
