import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";

const ScrollUpBtn = () => {
  const arrowUpIcon = (
    <FontAwesomeIcon className="arrowUpIcon" icon={faArrowUp} />
  );
  const [isVisible, setIsVisible] = useState(false);

  // ----START SCROLL-UP----

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // ----END SCROLL-UP----

  // START ----USE-EFFECT-SCROLL----
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // END ----USE-EFFECT-SCROLL----

  return (
    <CSSTransition
      in={isVisible}
      timeout={300}
      classNames="fade-slide"
      unmountOnExit
    >
      <button
        className={`scroll-to-top ${!isVisible ? "hide" : ""}`}
        onClick={scrollToTop}
      >
        {arrowUpIcon}
      </button>
    </CSSTransition>
  );
};
export default ScrollUpBtn;
