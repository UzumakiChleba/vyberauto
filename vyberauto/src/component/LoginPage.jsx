import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../CSSstyly/LoginPage.css"; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login with:', email, password);
  };

  return (
    <div className="login-container">
      <h2>Přihlásit se</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Zadejte svůj email"
        />

        <label>Heslo:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Zadejte své heslo"
        />

        <button type="submit">Přihlásit se</button>
      </form>

      <div className="register-link">
        <p>Nemáte účet? <Link to="/register">Zaregistrujte se zde</Link></p>
      </div>
    </div>
  );
}

export default LoginPage;
