import Record from "./Record";

const Content = ({ data }) => {
  const columns = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>{columns.map((col) => (
          <th key={col}>{col.charAt(0).toUpperCase() + col.slice(1)}</th>
        ))}</tr>
      </thead>
      <tbody>
        {data.map((datum) => (
          <Record
            key={datum.id}
            columns={columns}
            data={datum}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Content;