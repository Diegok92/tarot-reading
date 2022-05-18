import React, { useState, useEffect } from "react";
import horoscope from "../Data/horoscope.json";
import "./form.css";

function Form() {
  const drawCard = function () {
    const info = fetch(
      "https://rws-cards-api.herokuapp.com/api/v1/cards/random"
    )
      .then((res) => res.json())
      .then((tarot) => {
        //console.log(yearBirth);
        console.log(tarot.cards[0]);
        if (tarot.cards[0].name) {
        }
        setTarotImage(tarot.cards[0].name);
        setTarotCardName(tarot.cards[0].name);
        setTarotCardType(tarot.cards[0].type);
        setTarotCardDesc(tarot.cards[0].desc);
        //console.log("signNumber vale: " + signNumber);
        //console.log(horoscope[6].info);
      });
  };
  const horoscopeToday = function () {
    let signo = sign.toLowerCase();
    console.log(signo);

    const info = fetch(`https://ohmanda.com/api/horoscope/${signo}`)
      .then((res) => res.json())
      .then((horoscope) => {
        setHoroscopeApi(horoscope.horoscope);
        console.log(horoscope);
        //console.log("signNumber vale: " + signNumber);
        //console.log(horoscope[6].info);
      });
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [yearBirth, setYearBirth] = useState("");
  const [monthBirth, setMonthBirth] = useState("");
  const [dayBirth, setDayBirth] = useState("");

  let [sign, setSign] = useState("");
  let [signNumber, setSignNumber] = useState("12");
  let [horoscopeApi, setHoroscopeApi] = useState("");

  const [tarotImage, setTarotImage] = useState("back");
  const [zodiacImage, setZodicaImage] = useState("Zodiac");
  const [tarotCardName, setTarotCardName] = useState("");
  // const [tarotCardValue, setTarotCardValue] = useState("");
  const [tarotCardType, setTarotCardType] = useState("");
  const [tarotCardDesc, setTarotCardDesc] = useState("");

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
      setSignNumber(0);
      setZodicaImage("Aquarius");
    }
    if (monthBirth == 1 && dayBirth > 31) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 2 && dayBirth >= 19) ||
      (monthBirth == 3 && dayBirth <= 20)
    ) {
      setSign("Pisces");
      setSignNumber(1);
      setZodicaImage("Pisces");
    }
    if (monthBirth == 2 && dayBirth > 29) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 3 && dayBirth >= 21) ||
      (monthBirth == 4 && dayBirth <= 19)
    ) {
      setSign("Aries");
      setSignNumber(2);
      setZodicaImage("Aries");
    }
    if (monthBirth == 3 && dayBirth > 31) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 4 && dayBirth >= 20) ||
      (monthBirth == 5 && dayBirth <= 20)
    ) {
      setSign("Taurus");
      setSignNumber(3);
      setZodicaImage("Taurus");
    }
    if (monthBirth == 4 && dayBirth > 30) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 5 && dayBirth >= 21) ||
      (monthBirth == 6 && dayBirth <= 21)
    ) {
      setSign("Gemini");
      setSignNumber(4);
      setZodicaImage("Gemini");
    }
    if (monthBirth == 5 && dayBirth > 31) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 6 && dayBirth >= 22) ||
      (monthBirth == 7 && dayBirth <= 22)
    ) {
      setSign("Cancer");
      setSignNumber(5);
      setZodicaImage("Cancer");
    }
    if (monthBirth == 6 && dayBirth > 30) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 7 && dayBirth >= 23) ||
      (monthBirth == 8 && dayBirth <= 22)
    ) {
      setSign("Leo");
      setSignNumber("6");
      setZodicaImage("Leo");
    }
    if (monthBirth == 7 && dayBirth > 31) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 8 && dayBirth >= 23) ||
      (monthBirth == 9 && dayBirth <= 22)
    ) {
      setSign("Virgo");
      setSignNumber(7);
      setZodicaImage("Virgo");
    }
    if (monthBirth == 8 && dayBirth > 31) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 9 && dayBirth >= 23) ||
      (monthBirth == 10 && dayBirth <= 22)
    ) {
      setSign("Libra");
      setSignNumber(8);
      setZodicaImage("Libra");
    }
    if (monthBirth == 9 && dayBirth > 30) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 10 && dayBirth >= 23) ||
      (monthBirth == 11 && dayBirth <= 21)
    ) {
      setSign("Scorpius");
      setSignNumber(9);
      setZodicaImage("Scorpius");
    }
    if (monthBirth == 10 && dayBirth > 31) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 11 && dayBirth >= 22) ||
      (monthBirth == 12 && dayBirth <= 21)
    ) {
      setSign("Sagittarius");
      setSignNumber(10);
      setZodicaImage("Sagittarius");
    }
    if (monthBirth == 11 && dayBirth > 30) {
      setSign("Check Dates");
    }
    if (
      (monthBirth == 12 && dayBirth >= 22) ||
      (monthBirth == 1 && dayBirth <= 19)
    ) {
      setSign("Capricorn");
      setSignNumber(11);
      setZodicaImage("Capricornus");
    }
    if (monthBirth == 12 && dayBirth > 31) {
      setSign("Check Dates");
    }

    // useEffect(() => {
    //   fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random")
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       setTarotCard(data.cards[0]);
    //     });
    // }, []);

    // const info = fetch(
    //   "https://rws-cards-api.herokuapp.com/api/v1/cards/random"
    // )
    //   .then((res) => res.json())
    //   .then((tarot) => {
    //     //console.log(yearBirth);
    //     console.log(tarot.cards[0]);
    //     setTarotCardName(tarot.cards[0].name);
    //     setTarotCardType(tarot.cards[0].type);
    //     setTarotCardDesc(tarot.cards[0].desc);
    //     //console.log("signNumber vale: " + signNumber);
    //     //console.log(horoscope[6].info);
    //   });
  };

  return (
    <div className="container w-50">
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
        <h2 className="form-label">
          Let's calculate your Zodiac Sign and see your Tarot Cards!!!
        </h2>
        <div>
          <button type="submit" className="btn btn-primary m-auto mt-4 mb-4">
            Calculate Zodiac Sign
          </button>
        </div>
        <figure
          className="figure w-50 m-auto d-block position-relative centrado text-center figure2"
          id="exportar"
        >
          <p className=" w-100 px-20 text-center  h1 text-center">{sign}</p>
          {
            <img
              src={`/images/signs/${zodiacImage}.png`}
              className="figure-img img-fluid mt-3 m-0 p-0 "
              alt="photo"
            />
          }

          <p>{horoscope[signNumber].info}</p>
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}>Prediction:</span>{" "}
            {horoscope[signNumber].prediction}
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}>Monetary Gains:</span>{" "}
            {horoscope[signNumber].money}
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}>Love Life:</span>{" "}
            {horoscope[signNumber].love}
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}>Health:</span>{" "}
            {horoscope[signNumber].health}
          </p>
        </figure>
        <button
          onClick={horoscopeToday}
          className="btn btn-primary m-auto mt-4 mb-4"
        >
          See Your Horoscope of the Day
        </button>
        <p>{horoscopeApi}</p>

        <div>
          <button
            onClick={drawCard}
            className="btn btn-primary m-auto mt-4 mb-4"
          >
            Card for the Past
          </button>
          <button
            onClick={drawCard}
            className="btn btn-primary m-auto mt-4 mb-4"
          >
            Card for the Present
          </button>
          <button
            onClick={drawCard}
            className="btn btn-primary m-auto mt-4 mb-4"
          >
            Card for the Future
          </button>
        </div>
      </form>

      <figure
        className="figure w-25 m-auto d-block position-relative centrado text-center figure2"
        id="exportar"
      >
        <p className=" w-100 px-30 text-center  h1 text-center">
          <p>{tarotCardName}</p>
        </p>
        <p>{tarotCardType}</p>
        {
          <img
            src={`/images/tarot/${tarotImage}.png`}
            className="figure-img img-fluid mt-3 m-0 p-0 "
            alt="..."
          />
        }
        <p className=" w-100 px-30 text-center  h1 text-center"></p>

        <p>{tarotCardDesc}</p>
      </figure>
    </div>
  );
}
export default Form;
