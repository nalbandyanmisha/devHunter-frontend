const CardList = ({ items, renderItem, selectable = false, selectedId, onSelect}) => {
  return (
    <div className="flex flex-wrap gap-4 w-full h-auto overflow-y-auto">
      {items.map((item) => renderItem(item, {
        isSelected: selectable && selectedId === item.id,
        onSelect: () => onSelect?.(item.id),
      }))}
    </div>
  );
}

export default CardList;
