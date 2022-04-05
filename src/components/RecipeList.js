import React from 'react';
import { Col, Row } from 'reactstrap';
import { RecipeCard } from './RecipeCard';

export function RecipeList(props) {
  return (
    <Row className="gy-4">
      {props.recipes?.map((recipe) => (
        <Col key={recipe._id} lg={3} md={4} sm={6} xs={12}>
          <RecipeCard
            title={recipe.title}
            preparationTime={recipe.preparationTime}
            slug={recipe.slug}
          />
        </Col>
      ))}
    </Row>
  );
}
