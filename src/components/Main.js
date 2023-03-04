import { useEffect, useState } from "react";
import Card from "./Card";
import api from "../utils/Api";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onClickCard /*onClickLikes, onClickDeleteCard*/,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getServerCards()])
      .then(([userData, initialCards]) => {
        setUserName(userData.name);
        setUserDescription(userData.job);
        setUserAvatar(userData.avatar);
        setCards(initialCards);
      })

      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }, []);

  return (
    <main className="content page__content">
      <section className="profile">
        <div className="profile__avatar">
          <img
            src={`${userAvatar}`}
            alt="жак ив кусто в красной шапке"
            className="profile__avatar-image"
          />
          <button
            type="button"
            className="profile__avatar-button"
            onClick={onEditAvatar}
          ></button>
        </div>

        <div className="profile__info">
          <div className="profile__info-title">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edit-icon"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__button-add-icon"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              /*src={card.link}
   name={card.name}*/
              onClickCard={onClickCard}
              /*onClickLikes={onClickLikes}
   onClickDeleteCard={onClickDeleteCard}*/
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
