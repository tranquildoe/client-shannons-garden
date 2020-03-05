import React, { useEffect, useState } from "react";
import { useForm } from "./../hooks/useForm";
import { Link } from "react-router-dom";
import apiHandler from "./../api/APIHandler";
import AvatarWidget from "./../components/buildingBlocks/AvatarWidget";

export default function SignupPage({history}) {
  const { formValues, getInputProps, handleChange } = useForm({
    name: "foo",
    username: "FooBarBaz",
    email: "test@foo.com",
    zipCode: "75018",
    password: "12345"
  });

  const handleSubmit = evt => {
    evt.preventDefault();

    const fd = new FormData();

    for (let prop in formValues) {
      fd.append(prop, formValues[prop]);
    }

    apiHandler
      .post("/signup", fd)
      .then(apiRes => {
        console.error(apiRes);
        history.push("/signin")
      })
      .catch(apiErr => {
        console.error(apiErr);
      });
  };

  console.log(formValues);
  return (
    <div>
      <h1 className="title">Sign up</h1>
      <p>
        Already have an account ? <Link to="/signin">please sign in</Link>
      </p>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="name">full name</label>
          <input
            autoComplete="off"
            className="form__input"
            id="name"
            type="text"
            {...getInputProps("name")}
          />
        </div>

        <div className="form__group">
          <label htmlFor="username">username</label>
          <input
            autoComplete="off"
            className="form__input"
            id="username"
            type="text"
            {...getInputProps("username")}
          />
        </div>

        <div className="form__group">
          <label htmlFor="email">email</label>
          <input
            autoComplete="off"
            className="form__input"
            id="email"
            type="email"
            {...getInputProps("email")}
          />
        </div>

        <div className="form__group">
          <label htmlFor="zipCode">zipcode</label>
          <input
            autoComplete="off"
            className="form__input"
            id="zipCode"
            type="text"
            {...getInputProps("zipCode")}
          />
        </div>

        <div className="form__group">
          <label htmlFor="password">password</label>
          <input
            autoComplete="off"
            className="form__input"
            id="password"
            type="password"
            {...getInputProps("password")}
          />
        </div>

        <AvatarWidget
          clbk={(evt, file, base64Str) => {
            console.log(evt.target.name, file, base64Str);
            handleChange(evt);
          }}
        />

        <button className="btn-secondary">ok</button>
      </form>
    </div>
  );
}
