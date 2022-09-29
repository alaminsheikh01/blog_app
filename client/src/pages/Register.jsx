import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>LOGIN</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Register</button>
        <p>this is error occure</p>
        <span>
          Don you have an account? <Link to="/login">Login</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Register;
