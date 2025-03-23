import React from "react";

function Main({ user }) {
  return (
    <div className="main-container">
      <h1>Добро пожаловать, {user?.username}!</h1>
      <div className="button-container">
        <a
          href="https://www.youtube.com"
          className="button youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        <a
          href="https://www.tiktok.com"
          className="button tiktok"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok
        </a>
      </div>
    </div>
  );
}

export default Main;
