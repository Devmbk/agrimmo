import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    
    // Reset du formulaire
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container-fluid contact-section">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h1 className="contact-title">Contactez-Nous</h1>
            <p className="contact-subtitle">
              Prêt à démarrer votre projet agro-immobilier ? Contactez notre équipe d'experts
            </p>
          </div>
        </div>

        <div className="row">
          {/* Informations de contact */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="contact-info">
              <h3>Nos Coordonnées</h3>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="contact-details">
                  <h5>Adresse</h5>
                  <p>123 Rue de l'Agriculture<br />75000 Paris, France</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="contact-details">
                  <h5>Téléphone</h5>
                  <p>+33 1 23 45 67 89</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="contact-details">
                  <h5>Email</h5>
                  <p>contact@agrimmo.fr</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-clock-fill"></i>
                </div>
                <div className="contact-details">
                  <h5>Horaires</h5>
                  <p>Lun - Ven: 8h00 - 18h00<br />Sam: 9h00 - 17h00</p>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="social-links">
                <h5>Suivez-nous</h5>
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="col-lg-6 col-md-12">
            <div className="contact-form">
              <h3>Envoyez-nous un Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="name">Nom complet</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="phone">Téléphone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="subject">Sujet</label>
                      <select
                        id="subject"
                        name="subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Sélectionner un sujet</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="elevage">Élevage</option>
                        <option value="immobilier">Immobilier</option>
                        <option value="consulting">Consulting</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                
                <button type="submit" className="btn btn-contact">
                  Envoyer le Message
                  <i className="bi bi-send ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;