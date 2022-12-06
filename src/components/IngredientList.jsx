import React from "react";
import IngredientItem from "./IngredientItem";

const IngredientList = ({ ingredientList, setIngredientList }) => {
  if (ingredientList) {
    console.log(ingredientList.length);
    return (
      <div>
        {ingredientList.map((ingredient) => (
          <IngredientItem
            key={ingredient}
            ingredientName={ingredient}
            ingredientList={ingredientList}
            setIngredientList={setIngredientList}
          />
        ))}
      </div>
    );
  }
};

export default IngredientList;
