import React, { useState } from "react";
import { sendMail } from "../utils/form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import FormBtn from "./UI/FormBtn";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store/data/data.slice";

const Form = () => {
  const {
    title,
    firstNamePlaseholder,
    lastNamePlaceholder,
    telegramPlaceholder,
    platforms,
    agreement,
    sendButton,
    confirmationButton,
    error,
    success,
  } = useSelector((state) => state.data.data.form);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  const handleVerificationSuccess = (token, ekey) => {
    if (token && ekey) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const submitForm = async (e) => {
    sendMail(e, "send.php");
  };

  const closeForm = (e) => {
    e.preventDefault();
    dispatch(toggle());
  };

  return (
    <form encType="multipart/form-data" method="post" className="form-signin" id="form" acceptCharset="utf-8" onSubmit={submitForm}>
      <div id="sign_up_info">
        <a href="/" className="brand text-center">
          <img src="./assets/images/logo/logo_mobile_v1.png" alt="Desctop Logo" />
        </a>
        <h2 className="form-signin-heading">{title}</h2>
        <div className="form-group">
          <label htmlFor="inputFirstName" className="sr-only">
            {firstNamePlaseholder}
          </label>
          <input type="text" id="inputFirstName" className="form-control" placeholder={firstNamePlaseholder} name="first_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="inputLastName" className="sr-only">
            {lastNamePlaceholder}
          </label>
          <input type="text" id="inputLastName" className="form-control" placeholder={lastNamePlaceholder} name="last_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail2" className="sr-only">
            Email
          </label>
          <input type="email" id="inputEmail2" className="form-control" placeholder="Email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="inputTelegram" className="sr-only">
            {telegramPlaceholder}
          </label>
          <input type="text" id="inputTelegram" className="form-control" placeholder={telegramPlaceholder} name="telegram" />
        </div>
        <h2 className="form-signin-heading">{platforms}</h2>
        <div className="form-group">
          <label className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" name="bookmaker_1" />
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description"> Laystars </span>
          </label>
          <label className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" name="bookmaker_2" />
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description"> PS3838 </span>
          </label>
          <label className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" name="bookmaker_3" />
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description"> Spotrsbet.io </span>
          </label>
        </div>
        <div className="checkbox mb-4 mt-4">
          <label className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" name="terms" required />
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description">
              {agreement.one} <a href="/terms-of-service">{agreement.termsOfServiceLink}</a> {agreement.three}
              <a href="/privacy-policy">{agreement.privacyPolicyLink}</a>.
            </span>
          </label>
        </div>
        {/* <HCaptcha
          sitekey="297db1fa-66d4-421c-a642-2d804038ba0e"
          onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
          className="hcaptcha"
        /> */}

        <FormBtn disabled={disabled}>{sendButton}</FormBtn>
      </div>
      <div id="x_sign_up_success" className="alert alert-success" style={{ display: "none" }}>
        <h4 className="alert-title">{success.title}</h4>
        <p>{success.text}</p>
        <FormBtn disabled={false} onClick={closeForm}>
          {confirmationButton}
        </FormBtn>
      </div>
      <div id="x_sign_up_error" className="alert alert-success" style={{ display: "none" }}>
        <h4 className="alert-title">{error.title}</h4>
        <p>{error.text}</p>
        <FormBtn disabled={false} onClick={closeForm}>
          {confirmationButton}
        </FormBtn>
      </div>
    </form>
  );
};

export default Form;
