import { SuccessIcon } from '@/icons/index.jsx';

const Card = ({ isSelected, onClick, children }) => {
  return (
    <section className={`relative cursor-pointer ${isSelected ? "card-selected" : "card-default"}`} onClick={onClick}>
      {isSelected && (
        <div className="absolute top-3 right-3 flex items-center justify-center">
          <SuccessIcon />
        </div>
      )}
      {children}
    </section>
  );
}
export default Card;
