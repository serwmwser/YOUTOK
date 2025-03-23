import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <div className="app-container">
        <h1>Добро пожаловать в YOU TOK!</h1>
        <p className="app-description">
          YOU TOK — это платформа, где вы можете:
        </p>
        <ul className="features-list">
          <li>Смотреть видео с YouTube и TikTok.</li>
          <li>Регистрироваться и входить в систему.</li>
          <li>Делиться видео с друзьями.</li>
        </ul>

        {!user && (
          <div className="button-container">
            <Link to="/login" className="button login-button">
              Войти
            </Link>
            <Link to="/register" className="button register-button">
              Зарегистрироваться
            </Link>
          </div>
        )}

        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/main" element={<Main user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
