import React from "react";

import "./styles.css";

import { MdDelete } from "react-icons/md";

export default function DevItem({ dev, handleRemove }) {
  return (
    <li className="dev-item">
      <header>
        <div className="header-info">
          <img src={dev.avatar_url} alt={dev.name} />
          <div className="user-info">
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(", ")}</span>
          </div>
        </div>
        <button
          type="button"
          className="remove-button"
          onClick={() => handleRemove(dev._id)}
        >
          <MdDelete size={24} color="#ED254E" />
        </button>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no github
      </a>
    </li>
  );
}
