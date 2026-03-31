import { Button } from "react-bootstrap";

function SideBar(props) {
  return (
    <>
      <Button onClick={() => props.myFilter("all")}>ALL</Button>
      <Button onClick={() => props.myFilter("fav")}>Favorite</Button>
      <Button onClick={() => props.myFilter("rate")}>Best Rate</Button>
    </>
  );
}
export default SideBar;
