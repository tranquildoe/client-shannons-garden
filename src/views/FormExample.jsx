import React from "react";
import Form from "./../components/form";

const FormExample = props => {
  return (
    <section className="container">
      <h1 className="title">React form with hooks</h1>
      <div className="row justify-content-center">
        <div className="col-3">
          {/* see Form.jsx line 62 for checkbox */}
          <Form />
        </div>
      </div>
    </section>
  );
};

export default FormExample;
