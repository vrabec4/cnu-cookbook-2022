import { Input } from 'reactstrap';

// const arr = ["1", "2"];

// const [first, second] = arr;

export function SearchInput({ setValue, ...rest }) {
  return (
    <Input
      placeholder="Vyhledat recept..."
      onChange={(event) => setValue(event.target.value)}
      {...rest}
    />
  );
}
