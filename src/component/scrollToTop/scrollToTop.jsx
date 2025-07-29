import React, { useState, useEffect } from "react";
import "./scrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour faire défiler vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Écouter le scroll pour afficher/masquer le bouton
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <i className="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
