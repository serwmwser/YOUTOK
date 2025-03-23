import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        const user = data.users.find(
          (u) => u.username === username && u.password === password
        );
        if (user) {
          setUser(user);
          navigate("/main");
        } else {
          setError("Неверное имя пользователя или пароль");
        }
      });
  };

  return (
    <div className="form-container">
      <h1>Вход в YOU TOK</h1>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Имя пользователя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Войти</button>
      <p>
        Нет аккаунта? <a href="/register">Зарегистрируйтесь</a>
      </p>
    </div>
  );
}

export default Login;
