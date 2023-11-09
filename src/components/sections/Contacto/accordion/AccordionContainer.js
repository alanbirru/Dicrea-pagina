import AccordionItem from "./AccordionItem";
import { useState } from "react";

const AccordionContainer = ({ accordion }) => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  const accordionList = accordion.map((item, index) => {
    return (
      <AccordionItem
        title={item.title}
        content={item.content}
        onToggle={() => handleToggle(index)}
        active={clicked === index}
      />
    );
  });

  return <div className="accordion-container">{accordionList}</div>;
};
export default AccordionContainer;
