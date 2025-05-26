import React, { useReducer } from "react";
import './style.css';

//D:\my-app\src\index.css

// Define initial state
const initialState = {
  name: "",
  email: "",
  age: "",
  message: "",
};

// Reducer function to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case "update_field":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ContactForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "update_field",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", state);
    dispatch({ type: "reset" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" value={state.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input name="email" type="email" value={state.email} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input name="age" type="number" value={state.age} onChange={handleChange} />
      </label>
      <label>
        Message:
        <textarea name="message" value={state.message} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </form>
  );
};

export default ContactForm; 
