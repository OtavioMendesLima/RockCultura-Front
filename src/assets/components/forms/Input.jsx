import React from 'react';
import Style from './Input.module.css';
import { CiMail } from "react-icons/ci";
import { PiKeyLight } from "react-icons/pi";

function Input({ type, name, placeHolder, icon }) {
  return (
    <div className={Style.form_control}>
      <div className={Style.icon}>
        {icon === 'email' && <CiMail />}
        {icon === 'password' && <PiKeyLight />}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeHolder}
        className={Style.input}
      />
    </div>
  );
}

export default Input;
