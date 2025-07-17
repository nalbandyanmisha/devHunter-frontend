const CardList = ({ items, renderItem }) => {
  return (
      items.map((item) => renderItem(item))
  );
};

export default CardList;
