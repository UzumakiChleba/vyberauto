import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; // Importujeme useLocation
import { supabase } from '../supabaseClient'; // Importuješ klienta Supabase
import "../CSSstyly/LoginPage.css";

const LoginPage = () => {
  const location = useLocation(); // Hook pro získání aktuální URL
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Supabase login funkce
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Chyba při přihlášení:', error.message);
      setError('Špatný email nebo heslo.');
    } else {
      console.log('Uživatel přihlášen:', data);
      alert('Přihlášení úspěšné!');
      // Přejít na původní stránku, odkud uživatel přišel
      window.location.href = location.state?.from.pathname || '/';
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <h2>Přihlásit se</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
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

        <button type="submit" disabled={loading}>
          {loading ? 'Přihlašování...' : 'Přihlásit se'}
        </button>
      </form>

      <div className="register-link">
        <p>Nemáte účet? <Link to="/register">Zaregistrujte se zde</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
