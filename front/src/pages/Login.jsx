import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { postLogin, getLoginUser } from '../services/api.js';

export const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const checkAccountExists = (callback) => {
    postLogin(email, password)
      .then(r => {
        if (r.status === 200) {
          getLoginUser(email, password).then(r => {
            console.log(r.data);
            localStorage.setItem("user", r.data.user_id);
            callback(true);
          });
        } else {
          callback(false);
        }
      })
      .catch(err => {
        console.log(err.message);
        setOpen(true); // Open the Snackbar when login fails
        setErrorMessage(err.message); // Set the error message
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email);

    checkAccountExists(accountExists => {
      if (accountExists) {
        props.setLoggedIn(true);
        /*if (navigate.length >= 2) {
          navigate('/');
        } else {
          navigate('/dashboard');
        }*/
        navigate('/');
      } else {
        console.error('Login failed');
      }
    });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      {open && (
        <div style={{ backgroundColor: 'red', color: 'white', padding: '10px', marginBottom: '10px' }}>
          {errorMessage}
          <button onClick={handleClose} style={{ marginLeft: '10px' }}>Close</button>
        </div>
      )}
      <h1>Log in</h1>
      <form onSubmit={handleLogin} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <button type="submit" style={{ padding: '10px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
          Log In
        </button>
        <button
          type="button"
          onClick={() => navigate('/signup')}
          style={{ padding: '10px', fontSize: '16px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
};