import { Table } from "react-bootstrap";

function FormFilm(props) {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <td>title</td>
            <td>favorite</td>
            <td>date</td>
            <td>rate</td>
          </tr>
        </thead>
        <tbody>
          {props.myfilm.map((f) => (
            <tr key={f.id}>
              <td>{f.title}</td>
              <td>{f.favorite}</td>
              <td>{f.watchdate}</td>
              <td>{f.rate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
export default FormFilm;
