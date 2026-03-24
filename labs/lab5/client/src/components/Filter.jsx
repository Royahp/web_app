import { Fragment } from "react";

import { Button } from "react-bootstrap";

function Filter(props) {
  return (
    <div>
      <Button onClick={() => props.onFilter("all")}>All</Button>
      <Button onClick={() => props.onFilter("favorite")}>Favorite</Button>
    </div>
  );
}
export default Filter;
