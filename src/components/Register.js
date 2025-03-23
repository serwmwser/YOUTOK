import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        const userExists = data.users.some((u) => u.username === username);
        if (userExists) {
          setError("Пользователь с таким именем уже существует");
        } else {
          const newUser = {
            id: data.users.length + 1,
            username,
            email,
            password,
          };
          data.users.push(newUser);
          setUser(newUser);
          navigate("/main");
        }
      });
  };

  return (
    <div className="form-container">
      <h1>Регистрация в YOU TOK</h1>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Имя пользователя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Зарегистрироваться</button>
      <p>
        Уже есть аккаунт? <a href="/">Войдите</a>
      </p>
    </div>
  );
}

export default Register;
