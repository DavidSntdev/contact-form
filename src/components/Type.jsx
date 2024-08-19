import "../styles/Type.css";
import { useState } from "react";

function Type() {
  const [isRequest, setisRequest] = useState();
  const [isEnquiry, setisEnquiry] = useState();

  const handleRadioChange = (e) => {
    const selectedType = e.target.id;
    setisRequest(selectedType == "request");
    setisEnquiry(selectedType == "enquiry");
  };

  return (
    <div id="type">
      <p>Query Type</p>
      <label
        htmlFor="enquiry"
        className="typeLabel"
        style={{
          backgroundColor: isEnquiry && "var(--colorGreen200)",
          border: isEnquiry && "1px solid var(--colorGreen600)",
        }}
      >
        <input
          type="radio"
          name=""
          id="enquiry"
          className="type"
          onChange={handleRadioChange}
          checked={isEnquiry}
          style={{ backgroundColor: isEnquiry && "var(--colorGreen600)" }}
        />
        <p>General Enquiry</p>
      </label>
      <label
        htmlFor="request"
        className="typeLabel"
        style={{
          backgroundColor: isRequest && "var(--colorGreen200)",
          border: isRequest && "1px solid var(--colorGreen600)",
        }}
      >
        <input
          type="radio"
          name=""
          id="request"
          className="type"
          onChange={handleRadioChange}
          checked={isRequest}
          style={{ backgroundColor: isRequest && "var(--colorGreen600)" }}
        />
        <p>Support Request</p>
      </label>
    </div>
  );
}

export default Type;
