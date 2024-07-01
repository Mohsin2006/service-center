import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faEnvelope, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
console.log(token);
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Service Center</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav w-100 d-flex justify-content-around">
          <div className="d-flex">
            {!token ? (
              <Link className="nav-link" to="/login">
                <FontAwesomeIcon icon={faSignInAlt} /> Login/Signup
              </Link>
            ) : (
              <button onClick={logout} className="nav-link btn btn-link">
                <FontAwesomeIcon icon={faSignInAlt} /> Logout
              </button>
            )}
          </div>
          <div className="d-flex">
            <form className="form-inline my-2 my-lg-0 d-flex">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
          <div className="d-flex">
            <Link className="nav-link" to="/complain">
              <FontAwesomeIcon icon={faEnvelope} /> Complain
            </Link>
            <Link className="nav-link" to="/dashboard">
              <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
