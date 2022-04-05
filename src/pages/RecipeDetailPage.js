import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api';

export function RecipeDetailPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .get(`/recipes/${slug}`)
      .then((response) => setRecipe(response.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [slug]);

  return (
    <>
      <h1>Recept</h1>
      {isLoading && <p>...Loading</p>}
      {error && <p>...Something went Wrong</p>}
      <p>{recipe.title}</p>
    </>
  );
}
