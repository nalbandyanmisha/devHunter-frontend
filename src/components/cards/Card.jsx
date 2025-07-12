const Card = ({ header, firstName = '', lastName='', totalCandidates = 0, newCandidates = 0, isSelected, onClick, children }) => {
  return (
    <section className={`w-[334px] p-4 grid grid-row border ${isSelected ? ("border-[#008B6E] bg-[#E8FAF6]") : ("border-[#C3C8CD]")} rounded-[12px] gap-2 cursor-pointer`} onClick={onClick}>
      {children}
    </section>
  );
}
export default Card;
