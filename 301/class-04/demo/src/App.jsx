import { useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const [form, setForm] = useState({
    username: "",
    dob: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  function handleChange(event) {
    // set the form state variable to be a COPY of what it was, with the input that triggered this function being overwritten with the new value
    setForm({ ...form, [event.target.name]: event.target.value });

    // if you want to be REAL fancy, you can also account for checkboxes
    // setForm({
    //   ...form,
    //   [event.target.name]:
    //     event.target[event.target.type === "checkbox" ? "checked" : "value"],
    // });
  }

  return (
    <>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input name="username" onChange={handleChange} />
        <label>Date of Birth</label>
        <input name="dob" type="date" onChange={handleChange} />
        <button>Submit</button>
      </form>
      <Child username={form.username} />
    </>
  );
}

export default App;
