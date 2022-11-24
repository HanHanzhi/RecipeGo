import styled from "styled-components";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import IngredientList from "./IngredientList";

function Search() {
  const [input, setInput] = useState("");
  const [ingredientText, setIngredientText] = useState("");
  const [ingredientList, setIngredientList] = useState([]);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    //navigate("/searched/" + ingredientList);
    if (!ingredientList.includes(ingredientText))
      setIngredientList([...ingredientList, ingredientText]);
    setIngredientText("");
    console.log(ingredientList);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("list is");
    console.log(ingredientList);
    navigate("/searched/" + ingredientList);
  };

  return (
    <div>
      <FormStyle onSubmit={(e) => onSubmit(e)}>
        <FaSearch></FaSearch>
        <input
          //onChange={(e) => setIngredientText(e.target.value)}
          //type="text"
          //value={ingredientText}
          type="text"
          name="ingredient-search"
          placeholder="Search ingredients..."
          value={ingredientText}
          onChange={(e) => setIngredientText(e.target.value)}
        />
      </FormStyle>
      <IngredientList
        IngredientList={ingredientList}
        setIngredientList={setIngredientList}
      />
      <button onClick={submitHandler}>Search</button>
    </div>
  );
}

const FormStyle = styled.form`
  margin: 0rem 20rem;
  position: relative;
  div {
    width: 50%;
    position: relative;
  }
  width: 100%;
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%.-50%);
    color: white;
  }
`;

export default Search;
