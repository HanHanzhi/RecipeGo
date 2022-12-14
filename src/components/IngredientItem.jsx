import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const IngredientItem = ({
  ingredientName,
  ingredientList,
  setIngredientList,
}) => {
  return (
    <div>
      <button
        onClick={() =>
          setIngredientList(
            ingredientList.filter((ingredient) => ingredient !== ingredientName)
          )
        }
      ></button>
      {ingredientName}
    </div>
  );
};

export default IngredientItem;
