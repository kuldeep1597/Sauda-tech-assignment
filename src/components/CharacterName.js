import React from "react";
import "./CharacterDetail.css";
import { useEffect, useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";

function CharacterName() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const Fetch = () => {
    try {
      fetch("https://api.sampleapis.com/futurama/characters")
        .then((res) => res.json())
        .then((data) => {
          setItem(data);
        });
    } catch (e) {
      console.log("no data fetched");
    }
  };
  useEffect(() => {
    Fetch();
  }, []);

  return (
    <div className="name">
      <h1>Futurama characters</h1>
      {item.map((it, i) => (
        <li className="namelist">
          <Link
            to={{
              pathname: "/characterDetail",
              state: it,
            }}
          >
            {it.name.first} {it.name.middle} {it.name.last}
          </Link>
        </li>
      ))}
    </div>
  );
}

export default CharacterName;
