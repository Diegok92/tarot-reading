import React, { useState } from "react";
import horoscope from "../Data/horoscope.json";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [yearBirth, setYearBirth] = useState("");
  const [monthBirth, setMonthBirth] = useState("");
  const [dayBirth, setDayBirth] = useState("");
  let [sign, setSign] = useState("");

  const getName = function (e) {
    setName(e.target.value);
  };
  let getAge = function (e) {
    setAge(e.target.value);
  };
  const getGender = function (e) {
    setGender(e.target.value);
  };
  const getYearBirth = function (e) {
    setYearBirth(e.target.value);
  };
  let getMonthBirth = function (e) {
    setMonthBirth(e.target.value);
  };
  const getDayBirth = function (e) {
    setDayBirth(e.target.value);
  };

  const sendForm = function (e) {
    e.preventDefault();
    console.log(name, gender, age, yearBirth, monthBirth, dayBirth);
    if (monthBirth >= 13 || dayBirth <= 32) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 1 && dayBirth >= 20) ||
      (monthBirth == 2 && dayBirth <= 18)
    ) {
      setSign("Aquarius");
    }
    if (monthBirth == 1 && dayBirth > 31) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 2 && dayBirth >= 19) ||
      (monthBirth == 3 && dayBirth <= 20)
    ) {
      setSign("Pisces");
    }
    if (monthBirth == 2 && dayBirth > 29) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 3 && dayBirth >= 21) ||
      (monthBirth == 4 && dayBirth <= 19)
    ) {
      setSign("Aries");
    }
    if (monthBirth == 3 && dayBirth > 31) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 4 && dayBirth >= 20) ||
      (monthBirth == 5 && dayBirth <= 20)
    ) {
      setSign("Taurus");
    }
    if (monthBirth == 4 && dayBirth > 30) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 5 && dayBirth >= 21) ||
      (monthBirth == 6 && dayBirth <= 21)
    ) {
      setSign("Gemini");
    }
    if (monthBirth == 5 && dayBirth > 31) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 6 && dayBirth >= 22) ||
      (monthBirth == 7 && dayBirth <= 22)
    ) {
      setSign("Cancer");
    }
    if (monthBirth == 6 && dayBirth > 30) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 7 && dayBirth >= 23) ||
      (monthBirth == 8 && dayBirth <= 22)
    ) {
      setSign("Leo");
    }
    if (monthBirth == 7 && dayBirth > 31) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 8 && dayBirth >= 23) ||
      (monthBirth == 9 && dayBirth <= 22)
    ) {
      setSign("Virgo");
    }
    if (monthBirth == 8 && dayBirth > 31) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 9 && dayBirth >= 23) ||
      (monthBirth == 10 && dayBirth <= 22)
    ) {
      setSign("Libra");
    }
    if (monthBirth == 9 && dayBirth > 30) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 10 && dayBirth >= 23) ||
      (monthBirth == 11 && dayBirth <= 21)
    ) {
      setSign("Scorpio");
    }
    if (monthBirth == 10 && dayBirth > 31) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 11 && dayBirth >= 22) ||
      (monthBirth == 12 && dayBirth <= 21)
    ) {
      setSign("Sagittarius");
    }
    if (monthBirth == 11 && dayBirth > 30) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 12 && dayBirth >= 22) ||
      (monthBirth == 1 && dayBirth <= 19)
    ) {
      setSign("Capricorn");
    }
    if (monthBirth == 12 && dayBirth > 31) {
      setSign("Check Dates");
    }
    const info = fetch(
      "https://rws-cards-api.herokuapp.com/api/v1/cards/random"
    )
      .then((res) => res.json())
      .then((cards) => {
        console.log(yearBirth);
        console.log(cards.cards[0]);
        console.log(horoscope[0]);
      });
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
            Year of Birth
          </label>
          <input
            type="number"
            className="form-control"
            id="birth"
            onChange={getYearBirth}
          />
        </div>
        <div className="col-md-6">
          <label for="birth" className="form-label">
            Month of Birth
          </label>
          <input
            type="number"
            className="form-control"
            id="birth"
            onChange={getMonthBirth}
          />
        </div>
        <div className="col-md-6">
          <label for="birth" className="form-label">
            Day of Birth
          </label>
          <input
            type="number"
            className="form-control"
            id="birth"
            onChange={getDayBirth}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary m-auto mt-4 mb-4">
            Let the Magic Begin
          </button>
        </div>
      </form>

      <figure
        className="figure w-50 m-auto d-block position-relative centrado text-center figure2"
        id="exportar"
      >
        <p className=" w-100 px-30 text-center position-absolute top-50 start-30 h1 text-center">
          Hola: {name}, sabias q sos: {sign}
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
export default Form;
