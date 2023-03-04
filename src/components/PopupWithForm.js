/*import { isDisabled } from '@testing-library/user-event/dist/utils';*/
import React from "react";

function PopupWithForm(props) {
  return (
    <section
      className={`popup popup__${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__content">
        <button
          type="button"
          className="popup__close"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={`${props.name}`} noValidate>
          {props.children}
          <button type="submit" className="popup__save">
            {props.buttonText || 'Сохранить'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;

/*<span className="popup__error">{props.buttonText}</span>*/
