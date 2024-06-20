import React from "react";
import "../css/Games.css";

function Games({ games }) {
  const { id, title, description, price, link, image } = games;
  return (
    <div className="games">
      <div className="game">
        <img src={image} width={350} height={180} />
        <h4 className="game-title">{title}</h4>
        <p className="game-description">{description}</p>
        <h3 className="game-price">{price} ₺</h3>
        <div className="game-link">
          <a href={link} target="_blank" style={{ textDecoration: "none" }}>
            Satın Almak İçin
          </a>
        </div>
      </div>
    </div>
  );
}

export default Games;
