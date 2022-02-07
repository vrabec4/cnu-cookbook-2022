import { Container } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../api';

export function RecipeDetailPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    api.get(`/recipes/${slug}`).then((response) => setRecipe(response.data));
  }, [slug]);

  return (
    <Container>
      <h1>Recept: {recipe.title}</h1>
      <p>{recipe.preparationTime} min</p>
    </Container>
  );
}
