import React, { useState } from "react";
import apiHandler from "./../api/APIHandler";


//  to modify:


const AddSeeds = () => {
  const [{ latinName, commonName, variety}, setState] = useState({ latinName: "", commonName: "", variety: "" });

  function handleChange(e) {
    e.persist(); // keep track of the input in the virtaul dom... make it persist...
    // ... then
    // use the states's previous values...since you dont want to overrride the existing infos
    // finally replace the current updated key (via th input's name) by associating the current input value
    setState((prevStateValues) => ({...prevStateValues, [e.target.name] : e.target.value}))
  }

  function handleSubmit(e) {
    e.preventDefault();
   
    apiHandler.post("/seeds", {
        latinName, commonName, variety
    })
    .then(apiRes => {
        console.log(apiRes)
    })
    .catch(apiErr => {
        console.error(apiErr)
    })
  }

  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <label htmlFor="commonName">Common name</label>
      {/* want id in following lines - this makes it highlight the input area and put the cursor in it when you click on the label */}
      <input id="commonName" name="commonName" type="text" />
      <label htmlFor="latinName">Latin name</label>
      <input id="latinName" name="latinName" type="text" />
      <label htmlFor="variety">Variety</label>
      <input id="variety" name="variety" type="text" />
      <button>add this new seed</button>
    </form>
  );
};

export default AddSeeds;