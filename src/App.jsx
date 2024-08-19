import "./styles/App.css";
import Form from "./components/Form";

function App() {
  const $btnSubmit = () => {};
  return (
    <>
      <main>
        <h1>Contact US</h1>
        <Form />
        <button onClick={$btnSubmit}>Submit</button>
      </main>
    </>
  );
}

export default App;
