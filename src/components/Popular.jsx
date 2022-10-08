import { useEffect, useState } from "react";
import styled from "styled-components";

function Popular() {
  //save our retrieve data into a state
  const [popular, setPopular] = useState([]);

  //we want to run this getPopular() the the component is mounted
  //we leave [] empty to just run it when mounted, can populate with other result
  useEffect(() => {
    getPopular();
  }, []);

  //we add async() here because it is the data we wanna wait for
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    console.log(data);
    setPopular(data.recipes);
  };

  //.map is looking through each recipe
  //key = ... is to remove the unique key error, this is to ensure if data gets removed
  //from data base, the website can response accordingly.
  return (
    <div>
      {popular.map((recipe) => {
        return (
          <Wrapper>
            <h3>Popular Recipe</h3>
            {popular.map((recipe) => {
              return (
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
              );
            })}
          </Wrapper>
        );
      })}
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0 rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
  }
`;

export default Popular;
