import { useEffect } from "react";
import { useState } from "react";
import { tampilPlayer } from "../services/tampil";

export default function InsertPlayer() {
      const [player, setPlayer] = useState([]);
    
      useEffect(() => {
        tampilPlayer()
          .then(setPlayer)
          .catch(console.error);
      }, []);
  return (
    <>
    <div className="card">
        
    </div>
    </>
    );
}