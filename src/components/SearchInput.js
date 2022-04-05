import React from 'react';
import { Input } from 'reactstrap';

export function SearchInput(props) {
  return (
    <Input
      className="mx-auto my-2"
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
    />
  );
}
