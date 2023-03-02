import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      name="add"
      title="Новое место"
      buttonText="Создать"
      onClose={onClose}
    >
      <div className="popup__content">
        <input
          className="popup__input popup__input_type_add"
          placeholder="Название"
          type="text"
          name="name"
          id="name-add"
          minLength="2"
          maxLength="30"
          required
        />
        <span id="name-add-error" className="popup__error"></span>
        <input
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на картинку"
          type="url"
          name="link"
          id="link"
          required
        />
        <span id="link-error" className="popup__error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
