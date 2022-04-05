import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from 'reactstrap';
import placeholder from '../images/food-placeholder.png';

export function RecipeCard({ title, slug, preparationTime }) {
  return (
    <div>
      <Card className="h-100">
        <Link to={`/recipe/${slug}`}>
          <CardImg src={placeholder} />
        </Link>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {preparationTime}
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}
