import iconSuccess from "../assets/images/icon-success-check.svg";
import "../styles/Success.css"

function Success() {
  return (
    <div id="sucess">
      <img src={iconSuccess} alt="" />
      <h1>Message Sent!</h1>
      <p>Thanks for complete the form. We&lsquo;ll be in touch Soon</p>
    </div>
  );
}

export default Success;
