import React, { useContext } from "react";

import { useForm } from "./../../hooks/useForm";
import APIHandler from "./../../api/APIHandler";
import { withRouter } from "react-router-dom";
import { UserContext } from "./../../auth/UserContext";

// don't need handleChange here
// when returning an object- destructure the obj when calling the custom hook (lines 8-9):
// once you call useForm, you don't have to handleChange again
const AddSeedInstForm = ({ plantId, history }) => {
  const { currentUser } = useContext(UserContext);
  const { formValues, getInputProps, handleChange } = useForm();

  // here, you don't put in custom hook with handleSubmit, b/c every form action is different (only handleChange) - won't have the reusability
  const handleSubmit = e => {
    e.preventDefault();

    formValues.plantId = plantId;

    APIHandler.post("/seeds", formValues)
      .then(() => history.push(`/user/${currentUser._id}/seedlist`))
      .catch(apiErr => console.error(apiErr));
  };

  return (
    <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
      <div className="form__group">
        <label htmlFor="variety">Variety</label>
        <input
          autoComplete="off"
          className="form__input"
          id="variety"
          type="text"
          {...getInputProps("variety")}
        />
      </div>

      <div className="form__group">
        <label htmlFor="forTrade">To Trade:</label>
        <input
          autoComplete="off"
          className="form__input"
          id="forTrade"
          type="checkbox"
          {...getInputProps("forTrade")}
        />
      </div>

      <div className="form__group">
        <label htmlFor="isOpenPollinated">Open-pollinated:</label>
        <input
          autoComplete="off"
          className="form__input"
          id="isOpenPollinated"
          type="checkbox"
          {...getInputProps("isOpenPollinated")}
        />
      </div>

      <div className="form__group">
        <label htmlFor="isHeirloom">Heirloom:</label>
        <input
          autoComplete="off"
          className="form__input"
          id="isHeirloom"
          type="checkbox"
          {...getInputProps("isHeirloom")}
        />
      </div>

      <div className="form__group">
        <label htmlFor="isHybrid">Hybrid:</label>
        <input
          autoComplete="off"
          className="form__input"
          id="isHybrid"
          type="checkbox"
          {...getInputProps("isHybrid")}
        />
      </div>

      <div className="form__group">
        <label htmlFor="isMedicinal">Medicinal:</label>
        <input
          autoComplete="off"
          className="form__input"
          id="isMedicinal"
          type="checkbox"
          {...getInputProps("isMedicinal")}
        />
      </div>

      <div className="form__group">
        <label htmlFor="isEdible">Edible:</label>
        <input
          autoComplete="off"
          className="form__input"
          id="isEdible"
          type="checkbox"
          {...getInputProps("isEdible")}
        />
      </div>

      {formValues.isEdible && (
        <div className="form__group">
          <label htmlFor="edibleParts">Edible parts:</label>
          <input
            autoComplete="off"
            className="form__input"
            id="edibleParts"
            type="text"
            {...getInputProps("edibleParts")}
          />
        </div>
      )}

      <div className="form__group">
        <label htmlFor="myNotes">My Notes</label>
        <textarea
          autoComplete="off"
          className="form__input"
          id="myNotes"
          type="text"
          rows="8"
          // ...getInputProps here is from useForm.js line 22,
          // this one line here replaces 3 lines
          // to get the key: val pairs as attributes, you spread the obj into the input
          {...getInputProps("myNotes")}
        />
      </div>

      <button className="btn is-success submitBtn">Submit</button>
    </form>
  );
};

export default withRouter(AddSeedInstForm);
