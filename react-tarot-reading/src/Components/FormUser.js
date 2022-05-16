import React, { useState } from "react";

import Tarot from "./Tarot";

function FormUser(params) {
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");

  const parentToChild = () => {
    setData(`${(name, age, gender, birth)}`);
  };

  const getName = function (e) {
    setName(e.target.value);
  };
  const getAge = function (e) {
    setAge(e.target.value);
  };
  const getGender = function (e) {
    setGender(e.target.value);
  };
  const getBirth = function (e) {
    setBirth(e.target.value);
  };

  const sendForm = function (e) {
    parentToChild();
    e.preventDefault();
    console.log(name, gender, age, birth);
  };

  return (
    <div className="container">
      <h1>Welcome to the Tarot Reading Page</h1>
      <form className="row g-3" onSubmit={sendForm}>
        <div className="col-md-6">
          <label for="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={getName}
          />
        </div>
        <div className="col-md-6">
          <label for="age" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            onChange={getAge}
          />
        </div>
        <div className="col-md-4">
          <label for="gender" className="form-label">
            Gender
          </label>
          <select id="gender" className="form-select" onChange={getGender}>
            <option selected>Choose...</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="col-md-6">
          <label for="birth" className="form-label">
            Birthday
          </label>
          <input
            type="date"
            className="form-control"
            id="birth"
            onChange={getBirth}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary m-auto mt-4 mb-4">
            Click Parent
          </button>
        </div>
      </form>
      <Tarot parentToChild={data} />
      <figure
        className="figure w-50 m-auto d-block position-relative centrado text-center figure2"
        id="exportar"
      >
        <p className=" w-100 px-30 text-center position-absolute top-50 start-30 h1 text-center">
          tu nombre es: {name}
        </p>

        {/* <img
          src={`/img/${imagen}.png`}
          className="figure-img img-fluid mt-3 m-0 p-0 "
          alt="..."
        /> */}
        {/* <p className=" w-100 border border-secondary text-white bg-dark pt-1 mt-0 pb-2 h5 text-center position-absolute end-80 start-30">{firma}</p>*/}
      </figure>
    </div>
  );
}
export default FormUser;
