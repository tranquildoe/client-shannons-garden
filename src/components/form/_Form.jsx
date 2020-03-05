import React, { useState } from "react";
import "./../../styles/Form.scss";
import { useForm } from "../../hooks/useForm";

// don't need handleChange here
// when returning an object- destructure the obj when calling the custom hook (lines 8-9):
// once you call useForm, you don't have to handleChange again
const Form = props => {
  const { formValues, getInputProps, handleChange } = useForm();

  // here, you don't put in custom hook with handleSubmit, b/c every form action is different (only handleChange) - won't have the reusability
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
      <div className="form__group">
        <label htmlFor="firstName">First name</label>
        <input
          autoComplete="off"
          className="form__input"
          id="firstName"
          type="text"
          {...getInputProps("firstName")}
        />
      </div>
      <div className="form__group">
        <label htmlFor="lastName">Last name</label>
        <input
          autoComplete="off"
          className="form__input"
          id="lastName"
          type="text"
          // ...getInputProps here is from useForm.js line 22,
          // this one line here replaces 3 lines
          // to get the key: val pairs as attributes, you spread the obj into the input
          {...getInputProps("lastName")}
        />
      </div>
      <div className="form__group">
        <label htmlFor="email">Email</label>
        <input
          autoComplete="off"
          className="form__input"
          id="email"
          type="text"
          {...getInputProps("email")}
        />
      </div>
      <div className="form__group">
        <label htmlFor="password">Password</label>
        <input
          autoComplete="off"
          className="form__input"
          id="password"
          type="password"
          {...getInputProps("password")}
        />
      </div>
      {/* for checkbox, see line 62: */}
      <div className="form__group">
        <label htmlFor="isAdmin">Admin</label>
        <input
          autoComplete="off"
          className="form__input"
          id="isAdmin"
          type="checkbox"
          
          {...getInputProps("isAdmin")}
        />
      </div>
      <button className="btn is-success">Submit</button>
    </form>
  );
};

export default Form;
