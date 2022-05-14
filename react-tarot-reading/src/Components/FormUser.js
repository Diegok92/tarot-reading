import React, { useState } from "react";

function FormUser(params) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");

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
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Let's Check Your Future
          </button>
        </div>
      </form>
    </div>
  );
}
export default FormUser;
