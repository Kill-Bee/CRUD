import { useEffect } from "react";
import { useState } from "react";
import { tampilPlayer } from "../services/tampil";

export default function TablePlayer() {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    tampilPlayer().then(setPlayer).catch(console.error);
  }, []);

  return (
    <>
      <div className="container">
        <table className="table table-dark table-striped mt-5">
          <thead>
            <tr>
              <th>No</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Position</th>
              <th>Teams</th>
            </tr>
          </thead>
          <tbody>
            {player.map((a, index) => (
              <tr key={a.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={a.photo} alt={a.name} width="50" />
                </td>
                <td>{a.name}</td>
                <td>{a.position}</td>
                <td>{a.teams}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
