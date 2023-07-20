import React from "react";
import pizza1 from "../images/pizza1.jpg";

function Recipe({item}) {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={pizza1} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{item.name}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Recipe;
