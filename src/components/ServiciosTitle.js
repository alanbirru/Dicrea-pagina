const ServiciosTitle = ({ title, id, handleClick, activeSection, icon }) => {
  return (
    <div
      className={`servicios-title-container ${id}-section ${
        activeSection === id ? "active" : ""
      }`}
      onClick={() => handleClick(id)}
    >
      <div className="servicios-Title-Icon">{icon}</div>
      <h3>{title}</h3>
    </div>
  );
};
export default ServiciosTitle;
