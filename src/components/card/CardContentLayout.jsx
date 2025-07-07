import Tag from './Tag.jsx';
import Label from './Label.jsx';

const CardContentLayout = function ({ label, items }) {
  const isItemsArray = Array.isArray(items);
  return (
    <>
      {isItemsArray ? (
        <div className="h-20 grid grid-rows-[20px_1fr] gap-1">
          <Label>{label}</Label>
          <div className="grid grid-rows-2 gap-2">
            <div className="flex flex-wrap gap-1.5">
              {items.map((item, idx) => (
                <Tag variant="default" key={idx}>{item}</Tag>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid auto-rows-auto gap-1">
          <Label>{label}</Label>
          <Tag variant="default">{items}</Tag>
        </div>
      )}
    </>
  );
}

export default CardContentLayout;
