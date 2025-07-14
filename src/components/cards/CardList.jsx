const CardList = ({ items, heading, renderItem }) => {
  return (
    <div className="subscriptions">
      <div className="flex flex-col gap-2.25">
        <div className="flex items-center justify-between">
          <p className="text-[18px] leading-[24px]">{heading}</p>
        </div>
        <div className="grid grid-row gap-2.25">
          <div className="flex flex-wrap gap-4 w-full h-auto overflow-y-auto">
            {items.map((item) => renderItem(item))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
