import React, { useState } from "react";
import "./../../styles/Form.scss";
import { useForm } from "./../../hooks/useForm";
import APIHandler from "./../../api/APIHandler"
// const mongoose = require("mongoose");

// const seedModel = require("./../../../../server-shannons-garden/models/");
// const sellerModel = require("../models/seller");
// const shopModel = require("../models/shop");
// const uploadCloud = require("../config/cloudinary");
// const protectRoute = require("./../middlewares/protectPrivateRoute")
// const protectRole = require("../middlewares/checkRole");


// don't need handleChange here
// when returning an object- destructure the obj when calling the custom hook (lines 8-9):
// once you call useForm, you don't have to handleChange again
const AddSeedInstForm = props => {
  const { formValues, getInputProps, handleChange } = useForm();

  // here, you don't put in custom hook with handleSubmit, b/c every form action is different (only handleChange) - won't have the reusability
  const handleSubmit = e => {
    e.preventDefault();
    APIHandler
    .post('/seeds', formValues)
    .then(() => console.log('Yaaaay created'))
    .catch(() => console.log('aww naww'))
    console.log(formValues);
  };

// mongoose.seeds.insertOne(
//     { 
//         "latinName" : {formValues[0].latinName},
//         "commonName" : {formValues[0].commonName}
//     }
// )

//   db.inventory.insertOne(
//     { "item" : "canvas",
//       "qty" : 100,
//       "tags" : ["cotton"],
//       "size" : { "h" : 28, "w" : 35.5, "uom" : "cm" }
//     }
//  )

  return (
    <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
        
        <div className="form__group">
        <label htmlFor="email">Your email:</label>
        <input
          autoComplete="off"
          className="form__input"
          id="email"
          type="text"
          {...getInputProps("email")}
        />
      </div>
        <div className="form__group">
        <label htmlFor="commonName">Common name:</label>
        <input
          autoComplete="off"
          className="form__input"
          id="commonName"
          type="text"
          {...getInputProps("commonName")}
        />
      </div>
        <div className="form__group">
        <label htmlFor="latinName">Latin name</label>
        <input
          autoComplete="off"
          className="form__input"
          id="latinName"
          type="text"
          {...getInputProps("latinName")}
        />
      </div>
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
        <label htmlFor="myNotes">My Notes</label>
        <input
          autoComplete="off"
          className="form__input"
          id="myNotes"
          type="text"
          // ...getInputProps here is from useForm.js line 22,
          // this one line here replaces 3 lines
          // to get the key: val pairs as attributes, you spread the obj into the input
          {...getInputProps("myNotes")}
        />
      {/* </div>
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
        /> */}
      </div>
      {/* for checkbox, see line 62: */}
      <div className="form__group">
        <label htmlFor="iFforTrade">To Trade:</label>
        <input
          autoComplete="off"
          className="form__input"
          id="isForTrade"
          type="checkbox"
          
          {...getInputProps("isForTrade")}
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
      

      <button className="btn is-success">Submit</button>
    </form>
  );
};

export default AddSeedInstForm;