import { useState } from "react";
import PropTypes from "prop-types";

function Infos({ setErrors, errors }) {
  const [isFirstNameFocus] = useState(false);
  const [isLastNameFocus] = useState(false);
  const [isEmailFocus] = useState(false);

  const handleFocus = (field) => {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleBlur = (field, value) => {
    if (!value) {
      setErrors((prev) => ({ ...prev, [field]: "The Field is required" }));
    }
  };

  return (
    <>
      <div className="names">
        <div className="form">
          <label htmlFor="txtFirstName">
            First Name
            <strong style={{ color: "var(--colorGreen600)" }}>*</strong>
          </label>
          <input
            type="text"
            id="txtFirstName"
            autoComplete="on"
            className="inputInfos name"
            onFocus={() => handleFocus("firstname")}
            onBlur={(e) => handleBlur("firstname", e.target.value)}
            style={{
              border: isFirstNameFocus ? "1px solid var(--colorGreen600)" : errors.firstname && "1px solid var(--colorRed)",
              outline: "none",
            }}
          />
          {errors.firstname && <p className="error">{errors.firstname}</p>}
        </div>
        <div className="form">
          <label htmlFor="txtLastName">
            Last Name
            <strong style={{ color: "var(--colorGreen600)" }}>*</strong>
          </label>
          <input
            type="text"
            id="txtLastName"
            autoComplete="on"
            className="inputInfos name"
            onFocus={() => handleFocus("lastname")}
            onBlur={(e) => handleBlur("lastname", e.target.value)}
            style={{
              border: isLastNameFocus ? "1px solid var(--colorGreen600)" : errors.lastname && "1px solid var(--colorRed)",
              outline: "none",
            }}
          />
          {errors.lastname && <p className="error">{errors.lastname}</p>}
        </div>
      </div>
      <div className="form">
        <label htmlFor="txtEmail">
          Email Address
          <strong style={{ color: "var(--colorGreen600)" }}>*</strong>
        </label>
        <input
          type="text"
          id="txtEmail"
          autoComplete="on"
          className="inputInfos"
          onFocus={() => handleFocus("email")}
          onBlur={(e) => handleBlur("email", e.target.value)}
          style={{
            border: isEmailFocus ? "1px solid var(--colorGreen600)" : errors.email && "1px solid var(--colorRed)",
            outline: "none",
          }}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
    </>
  );
}

Infos.propTypes = {
  setErrors: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default Infos;

