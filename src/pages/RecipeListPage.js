import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Spinner } from 'reactstrap';

import { api } from '../api';
import { PageTitle } from '../components/PageTitle';
import { RecipeList } from '../components/RecipeList';
import { SearchInput } from '../components/SearchInput';

export function RecipeListPage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setIsLoading(true);
    api
      .get('/recipes')
      .then((response) => setRecipes(response.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  const handleInputChange = (value) => {
    setSearchValue(value);
  };

  const filterredRecipes = recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
  });

  console.log({ searchValue });
  return (
    <Container>
      <PageTitle title="Recipes" />
      <SearchInput
        placeholder="Search recipe ..."
        onChange={(event) => {
          handleInputChange(event.target.value);
        }}
        value={searchValue}
        name="search"
      />
      {isLoading && <Spinner>Loading...</Spinner>}
      {error && <Alert color="danger">...Something went Wrong</Alert>}
      <RecipeList recipes={filterredRecipes} />
    </Container>
  );
}
