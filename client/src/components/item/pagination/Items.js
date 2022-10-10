function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>{item}</h3>
          </div>
        ))}
    </>
  );
}

export default Items;
