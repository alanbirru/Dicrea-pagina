const AccordionItem = ({ title, content, onToggle, active }) => {
  return (
    <div className={`accordion-item-container ${active ? "activeAc" : ""}`}>
      <div className="accordion-title" onClick={onToggle}>
        <div>{title}</div>
        {/* <div>{active ? "—" : "+"}</div> */}
      </div>
      <div className={`accordion-content ${active ? "open" : ""}`}>
        <div>{content}</div>
      </div>
    </div>
  );
};
export default AccordionItem;
