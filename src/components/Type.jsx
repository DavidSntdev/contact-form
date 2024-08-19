import "../styles/Type.css";
import { useState } from "react";
import PropTypes from "prop-types";

function Type({ setErrors, errors }) {
  const [isRequest, setisRequest] = useState(false);
  const [isEnquiry, setisEnquiry] = useState(false);

  const handleRadioChange = (e) => {
    const selectedType = e.target.id;
    setisRequest(selectedType === "request");
    setisEnquiry(selectedType === "enquiry");
    setErrors((prev) => ({ ...prev, type: "" }));
  };

  return (
    <div id="type">
      <p>
        Query Type <strong style={{ color: "var(--colorGreen600)" }}>*</strong>
      </p>
      <div className="inputsType">
        <label
          htmlFor="enquiry"
          className="typeLabel"
          style={{
            backgroundColor: isEnquiry ? "var(--colorGreen200)" : "",
            border: isEnquiry ? "1px solid var(--colorGreen600)" : "",
          }}
        >
          <input
            type="radio"
            name="queryType"
            id="enquiry"
            className="type"
            onChange={handleRadioChange}
            checked={isEnquiry}
            style={{ backgroundColor: isEnquiry ? "var(--colorGreen600)" : "" }}
          />
          <p>General Enquiry</p>
        </label>
        <label
          htmlFor="request"
          className="typeLabel"
          style={{
            backgroundColor: isRequest ? "var(--colorGreen200)" : "",
            border: isRequest ? "1px solid var(--colorGreen600)" : "",
          }}
        >
          <input
            type="radio"
            name="queryType"
            id="request"
            className="type"
            onChange={handleRadioChange}
            checked={isRequest}
            style={{ backgroundColor: isRequest ? "var(--colorGreen600)" : "" }}
          />
          <p>Support Request</p>
        </label>
      </div>
      {errors.type && <p className="error">{errors.type}</p>}
    </div>
  );
}

Type.propTypes = {
  setErrors: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
};

export default Type;
