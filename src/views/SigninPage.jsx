import React, { useContext } from "react";
import { useForm } from "./../hooks/useForm";
import { Link } from "react-router-dom";
import apiHandler from "./../api/APIHandler";
import { UserContext } from "./../auth/UserContext";

export default function SigninPage({ history }) {
  const { setCurrentUser } = useContext(UserContext);
  const { formValues, getInputProps, handleChange } = useForm({
    email: "test@foo.com",
    password: "12345"
  });

  const handleSubmit = evt => {
    evt.preventDefault();

    apiHandler
      .post("/signin", formValues)
      .then(({ data }) => {
        setCurrentUser(data.currentUser);
        history.push("/mydashboard");
      })
      .catch(apiErr => {
        console.error(apiErr);
      });
  };

  return (
    <div>
      <h1 className="title">Sign in</h1>
      <p>
        No account yet ? <Link to="/signup">please sign up</Link>
      </p>

      <form onChange={handleChange} onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="email">email</label>
          <input
            autoComplete="off"
            className="form__input"
            id="email"
            name="email"
            type="email"
            {...getInputProps("email")}
          />
        </div>

        <div className="form__group">
          <label htmlFor="password">password</label>
          <input
            autoComplete="off"
            className="form__input"
            id="password"
            name="password"
            type="password"
            {...getInputProps("password")}
          />
        </div>

        <button className="btn-secondary">ok</button>
      </form>
    </div>
  );
}
