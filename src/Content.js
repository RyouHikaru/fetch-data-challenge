const Content = ({ list }) => {
  const listItems = list.map((item) => 
    <li key={item.id}>{JSON.stringify(item)}</li>
  );

  return (
    <main>
      <ul>{listItems}</ul>
    </main>
  )
}

// JSON.stringify(listItem)

export default Content;