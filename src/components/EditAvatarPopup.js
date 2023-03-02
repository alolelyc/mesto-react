import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      onClose={onClose}
    >
      <div className="popup__content">
        <input
          className="popup__input popup__input_type_link"
          type="url"
          name="link"
          id="link-ava"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="link-ava-error" className="popup__error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
