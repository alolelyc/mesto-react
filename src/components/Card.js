import React from "react";

function Card({ card, onClickCard }) {
  function handleClickCard() {
    onClickCard(card);
  }

  return (
    <article className="card">
      <button type="button" className="card__button-del"></button>
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick={handleClickCard}
      />
      <div className="card__item">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-box">
          <button
            type="button"
            className="card__like-button"
            name="btnlike"
            /*onClick={handleClickLikes}*/
          ></button>
          <span id="count-likes" className="card__count-likes">
            {card.likes.length}
          </span>
        </div>
      </div>
    </article>
  );
}

export default Card;
