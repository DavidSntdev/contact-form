import "../styles/Form.css";
import Type from "./Type";

function Form() {
  return (
    <form action="" method="get">
      <div className="form">
        <label htmlFor="txtFirstName">First Name</label>
        <input
          type="text"
          name=""
          id="txtFirstName"
          autoComplete="on"
          className="inputInfos"
        />
      </div>
      <div className="form">
        <label htmlFor="txtLastName">Last Name</label>
        <input
          type="text"
          name=""
          id="txtLastName"
          autoComplete="on"
          className="inputInfos"
        />
      </div>
      <div className="form">
        <label htmlFor="txtEmail">Email Adress</label>
        <input
          type="text"
          name=""
          id="txtEmail"
          autoComplete="on"
          className="inputInfos"
        />
      </div>
      <Type />
      <div className="form">
        <label htmlFor="txtMessage">Message</label>
        <input type="text" name="" id="txtMessage" />
      </div>
      <div id="check">
        <input type="checkbox" name="" id="checkbox" />
        <label htmlFor="checkbox" id="lblCheck">I consent to being contacted by the team</label>
      </div>
    </form>
  );
}

export default Form;
