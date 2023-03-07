import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, image, name, ingredients, ingredients2, category }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>
          {ingredients}, {ingredients2}
        </h4>
        <p>{category}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          View Recipe
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
