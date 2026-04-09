function FilmList(props) {
  return (
    <>
      <table>
        <tr>
          <th>Title</th>
          <th>Favorite</th>
          <th>watch Date </th>
          <th>Rate</th>
        </tr>
        <tbody>
          {props.films.map((f) => (
            <tr key={f.id}>
              <td>{f.title}</td>
              <td>{f.favorite ? "Yes" : "No"}</td>
              <td>{f.watchdate}</td>
              <td>{f.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default FilmList;
