import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const navigate=useNavigate()
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const url = "http://localhost:5000/api/user";

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'login' : 'signup';
    const payload = isLogin ? { email, password } : { username, email, password };

    try {
      const response = await axios.post(`${url}/${endpoint}`, payload);
      setMessage(response.data.message);
      if (response.data.success && isLogin) {
        let token=localStorage.setItem("token",response.data.token)
        navigate("/dashboard")
      }
    } catch (error) {
      setMessage('Error occurred. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">{isLogin ? 'Login' : 'Signup'}</h2>
          {message && <div className="alert alert-info">{message}</div>}
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              {isLogin ? 'Login' : 'Signup'}
            </button>
          </form>
          <button onClick={toggleForm} className="btn btn-link btn-block">
            {isLogin ? 'Don\'t have an account? Signup' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
