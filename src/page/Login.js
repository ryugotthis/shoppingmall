import React from 'react';
// import { Container, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Login = ({ setAuthenticate, authenticate }) => {
  console.log('status:', authenticate);
  const navigate = useNavigate();
  const LoginUser = (event) => {
    // 새로고침 막기
    event.preventDefault();
    setAuthenticate(true);
    navigate('/product');
  };
  return (
    <div className="login">
      <div className="login-box">
        <h2>Log in</h2>

        {authenticate ? (
          <form onSubmit={(event) => LoginUser(event)}>
            <input type="submit" value="Logout" />
          </form>
        ) : (
          <form onSubmit={(event) => LoginUser(event)}>
            <input type="text" placeholder="id" />
            <input type="password" placeholder="password" />
            <label for="remember-check">
              <input type="checkbox" />
              아이디 저장하기
            </label>
            <input type="submit" value="Login" />
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
