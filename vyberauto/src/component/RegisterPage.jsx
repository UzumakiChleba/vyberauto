import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // Importuješ klienta Supabase
import "../CSSstyly/RegisterPage.css";

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Hesla se neshodují!');
      setLoading(false);
      return;
    }

    // Supabase registrace uživatele
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Chyba při registraci:', error.message);
      setError('Registrace selhala. Zkuste to znovu.');
    } else {
      console.log('Uživatel registrován:', data);
      setSuccess('Registrace úspěšná! Zkontrolujte svůj email pro potvrzení.');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }

    setLoading(false);
  };

  return (
    <div className="register-container">
      <h2>Registrace</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleRegister}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Zadejte svůj email"
          required
        />
        
        <label>Heslo:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Zadejte své heslo"
          required
        />

        <label>Potvrďte heslo:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Potvrďte své heslo"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Registrace...' : 'Zaregistrovat se'}
        </button>
      </form>

      <div className="login-link">
        <p>Máte už účet? <Link to="/login">Přihlaste se zde</Link></p>
      </div>
    </div>
  );
};

export default RegisterPage;
