import { useEffect } from "react";
import { useState } from "react";
import { tampilPlayer } from "../services/tampil";

export default function InsertPlayer({ onBackClick }) {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    tampilPlayer().then(setPlayer).catch(console.error);
  }, []);
  return (
    <>
      <div className="container">
        <div className="card p-4 mt-5">
          <h2>Insert Player</h2>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <input type="file" className="form-control" id="inputGroupFile02" />
            <label className="input-group-text" htmlFor="inputGroupFile02">
              Photos
            </label>
          </div>

            <div className="input-group mb-3">
            <select className="form-select" id="inputGroupSelect02" defaultValue="">
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


          <div className="input-group mb-3">
            <select className="form-select" id="inputGroupSelect02" defaultValue="">
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

         

          <button className="btn btn-secondary px-2" onClick={onBackClick}>
            Send ⬅️
          </button>
        </div>
      </div>
    </>
  );
}
