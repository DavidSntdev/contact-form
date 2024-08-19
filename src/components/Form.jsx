import "../styles/Form.css";
import Type from "./Type";
import Infos from "./Infos.jsx";
import { useState, useEffect } from "react";
import { validateFields } from "../utils/validateFields.js";
import Success from "./Success.jsx";

function Form() {
  const [isMessageFocus, setMessageFocus] = useState(false);
  const [errors, setErrors] = useState({});
  const [, setIsFormValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    const firstname = document.getElementById("txtFirstName").value;
    const lastname = document.getElementById("txtLastName").value;
    const email = document.getElementById("txtEmail").value;
    const message = document.getElementById("txtMessage").value;
    const check = document.getElementById("checkbox").checked;
    const type =
      document.querySelector('input[name="queryType"]:checked')?.id || "";

    const isValid = validateFields(
      firstname,
      lastname,
      email,
      message,
      check,
      type,
      setErrors
    );

    setIsFormValid(isValid);

    if (isValid) {
      setShowSuccess(true);
    }
  };

  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false); 
      }, 5000); 
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);

  return (
    <>
      {showSuccess && <Success />}
      <form action="" method="get">
        <Infos setErrors={setErrors} errors={errors} />
        <Type setErrors={setErrors} errors={errors} />
        <div className="form">
          <label htmlFor="txtMessage">
            Message <strong style={{ color: "var(--colorGreen600)" }}>*</strong>
          </label>
          <textarea
            id="txtMessage"
            onFocus={() => setMessageFocus(true)}
            onBlur={() => setMessageFocus(false)}
            style={{
              border: isMessageFocus
                ? "1px solid var(--colorGreen600)"
                : errors.message && "1px solid var(--colorRed)",
              outline: "none",
            }}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <div id="check">
          <input type="checkbox" name="" id="checkbox" />
          <label htmlFor="checkbox" id="lblCheck">
            I consent to being contacted by the team
            <strong style={{ color: "var(--colorGreen600)" }}> *</strong>
          </label>
        </div>
        {errors.check && <p className="error">{errors.check}</p>}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
