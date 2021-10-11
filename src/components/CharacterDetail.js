import React from "react";
import "./CharacterDetail.css";

const CharacterDetail = (props) => {
  const {
    age,
    id,
    name,
    images,
    gender,
    occupation,
    species,
    homePlanet,
    sayings,
  } = props.location.state;
  return (
    <>
      <div className="charName">
        {name.first} {name.middle} {name.last}
      </div>
      <div className="about-main">
        <div className="about-main-left">
          <img className="charImage" src={images.main} alt="" />
        </div>
        <div className="about-main-right">
          <div>
            <span>Gender : </span>
            {gender}
          </div>
          <div>
            <span>Age : </span>
            {age}
          </div>
          <div>
            <span>Species : </span>
            {species}
          </div>
          {homePlanet && (
            <div>
              <span>HomePlanet : </span>
              {homePlanet}
            </div>
          )}
          <div>
            <span>Occupation : </span>
            {occupation}
          </div>
          <div>
            <span>Sayings : </span>"{sayings[0]}"
          </div>
        </div>
      </div>
    </>
  );
};
export default CharacterDetail;
