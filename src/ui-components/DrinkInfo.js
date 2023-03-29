import React from "react";
import "./DrinkInfo.css";

function DrinkInfo({ drink }) {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure} `);
    }
  }

  return (
    <div>
      <ul className="no-bullet">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default DrinkInfo;
