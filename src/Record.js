import RecordItem from "./RecordItem";

const Record = ({ columns, data }) => {
  return (
    <tr>
      {columns.map((col) => (
        <RecordItem
          key={col}
          column={col}
          data={data}
        />
      ))}
    </tr>
  )
}

export default Record;