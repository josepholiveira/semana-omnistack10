import React from "react";

import "./styles.css";

export default function DevItem({ dev, handleRemove }) {
  return (
    <li className="dev-item">
      <header>
        <div>
          <img src={dev.avatar_url} alt={dev.name} />
          <div className="user-info">
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(", ")}</span>
          </div>
        </div>
        <button type="button" onClick={() => handleRemove(dev._id)}>
          Remover
        </button>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no github
      </a>
    </li>
  );
}
