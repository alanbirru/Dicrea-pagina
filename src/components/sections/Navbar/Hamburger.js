const Hamburger = ({ isOpen, onClick }) => {
  return (
    <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
