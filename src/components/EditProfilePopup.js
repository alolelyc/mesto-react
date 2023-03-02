import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      onClose={onClose}
    >
      <div className="popup__content">
        <input
          className="popup__input popup__input_type_name"
          placeholder="О себе"
          type="text"
          name="name"
          id="name-edit"
          minLength="2"
          maxLength="40"
          required
        />
        <span id="name-edit-error" className="popup__error"></span>

        <input
          className="popup__input popup__input_type_job"
          placeholder="Род деятельности"
          type="text"
          name="job"
          id="job"
          minLength="2"
          maxLength="200"
          required
        />
        <span id="job-error" className="popup__error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

//
