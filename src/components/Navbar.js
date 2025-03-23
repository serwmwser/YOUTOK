import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav>
      <Link to="/">YOU TOK</Link>
      {user && <button onClick={handleLogout}>Выйти</button>}
    </nav>
  );
}

export default Navbar;
