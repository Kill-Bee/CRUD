import { useState } from "react";
import { tambahPlayer } from "../services/service";

export default function InsertPlayer({ onBackClick, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    position: "",
    teams: "",
    photo: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await tambahPlayer();
    onSuccess();
  }

  return (
    <>
      <div className="container">
        <div className="card p-4 mt-5">
          <h2 className="mb-3">Insert Player</h2>

          {/* input name */}
          <div className="input-group mb-3">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Insert name"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={handleChange}
            />
          </div>

          {/* input photo */}
          <div className="input-group mb-3">
            <input type="file" className="form-control" id="inputGroupFile02" name="photo" onChange={handleChange} />
            <label className="input-group-text" htmlFor="inputGroupFile02">
              Photos
            </label>
          </div>

          {/* input position */}
          <div className="input-group mb-3">
            <select className="form-select" id="inputGroupSelect02" defaultValue="" name="position" onChange={handleChange}>
              <option value="" disabled>Your Position</option>
              <option value="1">Point Guard (PG)</option>
              <option value="2">Shooting Guard (SG)</option>
              <option value="3">Small Forward (SF)</option>
              <option value="4">Power Forward (PF)</option>
              <option value="5">Center (C)</option>
            </select>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Options
            </label>
          </div>

          {/* input teams */}
          <div className="input-group mb-3">
            <select className="form-select" id="inputGroupSelect02" defaultValue="" name="teams" onChange={handleChange}>
              <option value="" disabled>Your Teams</option>
              <option value="1">Boston Celtics</option>
              <option value="2">Los Angeles Lakers</option>
              <option value="3">Chicago Bulls</option>
              <option value="4">Golden State Warriors</option>
              <option value="5">San Antonio Spurs</option>
              <option value="5">Miami Heat</option>
              <option value="5">New York Knicks</option>
            </select>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Options
            </label>
          </div>

          {/* button send & back */}
          <div className="row">
            <button type="submit" className="btn btn-danger px-2" onSubmit={handleSubmit}>Send</button>
            <button type="button" className="btn btn-primary px-2" onClick={onBackClick}>Back</button>
          </div>
        </div>
      </div>
    </>
  );
}
