import React from "react";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Tarot Reading Page</h1>

      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputFullName" className="form-label">
            Full Name
          </label>
          <input type="text" className="form-control" id="inputFullName" />
        </div>
        <div className="col-md-6">
          <label for="inputAge" className="form-label">
            Age
          </label>
          <input type="text" className="form-control" id="inputAge" />
        </div>
        <div className="col-md-4">
          <label for="gender" className="form-label">
            Gender
          </label>
          <select id="gender" className="form-select">
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
          <input type="date" className="form-control" id="birth" />
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
export default Home;
