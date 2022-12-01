function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div key={index}>
            <h3>{item}</h3>
          </div>
        ))}
    </>
  );
}

export default Items;
