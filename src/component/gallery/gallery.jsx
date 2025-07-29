import React, { useState, useEffect } from "react";
import "./gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("Tous");
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    {
      id: 1,
      src: "/images/agriculture-moderne.svg",
      title: "Agriculture Moderne",
      category: "Agriculture",
      description: "Technologies innovantes pour une agriculture durable et productive."
    },
    {
      id: 2,
      src: "/images/elevage-durable.svg",
      title: "Élevage Responsable",
      category: "Élevage",
      description: "Pratiques d'élevage respectueuses du bien-être animal et de l'environnement."
    },
    {
      id: 3,
      src: "/images/immobilier-rural.svg",
      title: "Solutions Immobilières",
      category: "Immobilier",
      description: "Habitat rural moderne intégrant les énergies renouvelables."
    },
    {
      id: 4,
      src: "/images/projets-en-cours.svg",
      title: "Projets en Cours",
      category: "Projets",
      description: "Nos réalisations actuelles et futurs développements."
    },
    {
      id: 5,
      src: "/images/banner.png",
      title: "Vision d'entreprise",
      category: "Général",
      description: "Notre vision pour un avenir agricole et immobilier durable."
    },
    {
      id: 6,
      src: "/images/AGrimo.png",
      title: "Identité AGRIMMO",
      category: "Branding",
      description: "L'identité visuelle qui représente nos valeurs et notre mission."
    }
  ];

  const categories = ["Tous", ...new Set(images.map(img => img.category))];

  const filteredImages = filter === "Tous" 
    ? images 
    : images.filter(img => img.category === filter);

  useEffect(() => {
    // Simulation de chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  if (isLoading) {
    return (
      <div className="gallery-section">
        <div className="container">
          <div className="gallery-loader">
            <div className="loader-spinner"></div>
            <p>Chargement de la galerie...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-section">
      <div className="container">
        {/* Header avec animation */}
        <div className="gallery-header">
          <h1 className="gallery-main-title">Notre Galerie</h1>
          <p className="gallery-subtitle">
            Explorez nos réalisations à travers une collection d'images représentant 
            notre expertise dans l'agriculture, l'élevage et l'immobilier rural.
          </p>
          
          {/* Filtres */}
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
                <span className="filter-count">
                  {category === "Tous" ? images.length : images.filter(img => img.category === category).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Galerie avec Masonry Layout */}
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`gallery-item gallery-item-${(index % 3) + 1}`}
              onClick={() => openModal(image)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gallery-image-container">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <div className="category-badge">{image.category}</div>
                    <h4 className="image-title">{image.title}</h4>
                    <p className="image-description">{image.description}</p>
                    <div className="gallery-actions">
                      <button className="view-btn">
                        <i className="bi bi-eye"></i>
                        Voir
                      </button>
                      <button className="zoom-btn">
                        <i className="bi bi-zoom-in"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistiques */}
        <div className="gallery-stats">
          <div className="stat-item">
            <h3>{images.length}</h3>
            <p>Projets présentés</p>
          </div>
          <div className="stat-item">
            <h3>{categories.length - 1}</h3>
            <p>Domaines d'expertise</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Satisfaction client</p>
          </div>
        </div>
      </div>

      {/* Modal améliorée */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-backdrop"></div>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedImage.title}</h3>
              <button className="close-button" onClick={closeModal}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            
            <div className="modal-body">
              <div className="modal-image-container">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title}
                  className="modal-image"
                />
                
                {/* Navigation */}
                <button className="nav-btn prev-btn" onClick={prevImage}>
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button className="nav-btn next-btn" onClick={nextImage}>
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
              
              <div className="modal-info">
                <div className="info-content">
                  <span className="modal-category">{selectedImage.category}</span>
                  <h4>{selectedImage.title}</h4>
                  <p>{selectedImage.description}</p>
                  
                  <div className="modal-actions">
                    <button className="action-btn primary">
                      <i className="bi bi-download"></i>
                      Télécharger
                    </button>
                    <button className="action-btn secondary">
                      <i className="bi bi-share"></i>
                      Partager
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
