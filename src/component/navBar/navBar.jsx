import React, { useState } from 'react';
import "./navBar.css";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        // Fermer le menu mobile après clic
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
            <div className='container-fluid'> 
                <div className='navbar-brand logo_style'>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/AGrimo.png`} 
                        alt='Logo Agrimmo' 
                        className='logo_img_style' 
                    />
                    <span className="brand-text">AGRIMMO</span>
                </div>
                
                {/* Bouton hamburger pour mobile */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleMenu}
                    aria-controls="navbarNav" 
                    aria-expanded={isMenuOpen} 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu de navigation */}
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <span className='nav-link nav_item_style' onClick={() => scrollToSection('accueil')}>
                                Accueil
                            </span>
                        </li>
                        <li className='nav-item'>
                            <span className='nav-link nav_item_style' onClick={() => scrollToSection('projets')}>
                                Projets
                            </span>
                        </li>
                        <li className='nav-item'>
                            <span className='nav-link nav_item_style' onClick={() => scrollToSection('productions')}>
                                Productions
                            </span>
                        </li>
                        <li className='nav-item'>
                            <span className='nav-link nav_item_style' onClick={() => scrollToSection('realisations')}>
                                Réalisations
                            </span>
                        </li>
                        <li className='nav-item'>
                            <span className='nav-link nav_item_style' onClick={() => scrollToSection('galerie')}>
                                Galerie
                            </span>
                        </li>
                        <li className='nav-item'>
                            <span className='nav-link nav_item_style' onClick={() => scrollToSection('contact')}>
                                Contact
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;