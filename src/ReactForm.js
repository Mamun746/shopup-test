import { useRef, useState } from "react";
import axios from "axios";

function ReactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const focusEmail = useRef(null);
  const focusPassword = useRef(null);
  const focusName = useRef(null);

  const focusNameField = () => {
    focusName.current.focus();
  };
  const focusEmailField = () => {
    focusEmail.current.focus();
  };
  const focusPasswordField = () => {
    focusPassword.current.focus();
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };
  // z6707vFeSirwfFc196lTNqqQqMHRmUxO;
  const handleSearch = (e) => {
    axios
      .get(
        `https:api.giphy.com/v1/gifs/search?api_key=z6707vFeSirwfFc196lTNqqQqMHRmUxO&q=${e.target.value}`
      )
      .then((res) => {
        setData(res.data.data);
      });
  };

  console.log(data);
  return (
    <>
      <div>
        <p>part 1</p>
        <label>
          Name:
          <input
            ref={focusName}
            onChange={onNameChange}
            placeholder="name"
            type="text"
          />
        </label>
        <label>
          Email:
          <input
            ref={focusEmail}
            onChange={onEmailChange}
            placeholder="email"
            type="text"
          />
        </label>

        <label>
          Password:
          <input
            ref={focusPassword}
            onChange={onPasswordChange}
            placeholder="password"
            type="text"
          />
        </label>
        <hr />
        <button onClick={focusNameField}>Focus Name Input</button>
        <button onClick={focusEmailField}>Focus Email Input</button>
        <button onClick={focusPasswordField}>Focus Password Input</button>
        <hr />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <hr />
        <p>part 2</p>
        <label>
          Search:
          <input
            placeholder="search with debounce"
            type="text"
            // onChange={debouncedSearch}
            onChange={handleSearch}
          />
        </label>
      </div>
      <div>
        {data.map((data) => {
          return (
            <div className="container">
              <p className="grid-item">{data.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ReactForm;
