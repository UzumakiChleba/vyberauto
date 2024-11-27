import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../CSSstyly/RegisterPage.css"; 

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Registrace s:', email, password);

    } else {
      console.log('Hesla se neshodují!');
    }
  };

  return (
    <div className="register-container">
      <h2>Registrace</h2>
      <form onSubmit={handleRegister}>
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

        <label>Potvrďte heslo:</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          placeholder="Potvrďte své heslo"
        />

        <button type="submit">Zaregistrovat se</button>
      </form>

      <div className="login-link">
        <p>Máte už účet? <Link to="/login">Přihlaste se zde</Link></p>
      </div>
    </div>
  );
}

export default RegisterPage;
