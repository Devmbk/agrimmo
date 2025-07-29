import React, { useState } from "react";
import "./productions.css";

const Productions = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  
  console.log('Productions component loaded'); // Debug log
  
  const productions = [
    {
      id: 1,
      title: "Produits Agricoles",
      icon: "bi-flower2",
      image: `${process.env.PUBLIC_URL}/images/agriculture-moderne.svg`,
      description: "Production de céréales, légumes bio et fruits de saison avec des méthodes durables et respectueuses de l'environnement.",
      items: ["Céréales bio", "Légumes frais", "Fruits de saison", "Plantes aromatiques"],
      details: {
        introduction: "Notre département agricole se spécialise dans la production biologique et durable, utilisant des techniques modernes respectueuses de l'environnement.",
        specialites: [
          {
            nom: "Céréales Bio",
            description: "Production de blé, orge, avoine et maïs certifiés biologiques. Nos céréales sont cultivées sans pesticides ni engrais chimiques.",
            avantages: ["Certification biologique", "Qualité nutritionnelle supérieure", "Traçabilité complète", "Livraison locale"]
          },
          {
            nom: "Légumes Frais",
            description: "Variétés de légumes de saison cultivés en plein air et sous serre. Production respectueuse des cycles naturels.",
            avantages: ["Fraîcheur garantie", "Variétés locales", "Récolte quotidienne", "Zéro résidu chimique"]
          },
          {
            nom: "Fruits de Saison",
            description: "Vergers diversifiés produisant pommes, poires, prunes et baies selon les saisons naturelles.",
            avantages: ["Fruits mûrs à point", "Saveurs authentiques", "Conservation naturelle", "Variétés anciennes"]
          },
          {
            nom: "Plantes Aromatiques",
            description: "Culture de basilic, thym, romarin, persil et autres herbes fraîches pour la gastronomie locale.",
            avantages: ["Arômes concentrés", "Séchage artisanal", "Huiles essentielles", "Production continue"]
          }
        ],
        processus: "Notre processus de production suit les standards biologiques les plus stricts, de la préparation du sol à la récolte, en passant par des contrôles qualité réguliers.",
        certifications: ["Agriculture Biologique", "HVE (Haute Valeur Environnementale)", "Label Rouge", "Producteur Local"]
      }
    },
    {
      id: 2,
      title: "Produits d'Élevage",
      icon: "bi-egg",
      image: `${process.env.PUBLIC_URL}/images/elevage-durable.svg`,
      description: "Élevage responsable produisant viande, lait et œufs de qualité supérieure dans le respect du bien-être animal.",
      items: ["Viande de qualité", "Lait frais", "Œufs fermiers", "Produits laitiers"],
      details: {
        introduction: "Notre élevage privilégie le bien-être animal et la qualité des produits, avec des animaux élevés en plein air dans des conditions optimales.",
        specialites: [
          {
            nom: "Viande de Qualité",
            description: "Élevage de bovins, ovins et porcins en pâturage libre avec alimentation naturelle et soins vétérinaires préventifs.",
            avantages: ["Élevage en plein air", "Alimentation naturelle", "Traçabilité complète", "Maturation traditionnelle"]
          },
          {
            nom: "Lait Frais",
            description: "Production laitière de vaches Holstein et Montbéliarde nourries à l'herbe fraîche et au foin local.",
            avantages: ["Collecte quotidienne", "Richesse nutritionnelle", "Goût authentique", "Transformation artisanale"]
          },
          {
            nom: "Œufs Fermiers",
            description: "Poules élevées en liberté avec accès permanent aux parcours extérieurs et alimentation aux grains locaux.",
            avantages: ["Poules en liberté", "Jaunes orangés", "Fraîcheur garantie", "Coquilles résistantes"]
          },
          {
            nom: "Produits Laitiers",
            description: "Transformation artisanale du lait en fromages, yaourts, beurre et crème avec des méthodes traditionnelles.",
            avantages: ["Transformation artisanale", "Recettes traditionnelles", "Conservation naturelle", "Saveurs authentiques"]
          }
        ],
        processus: "Notre élevage respecte les cycles naturels des animaux avec des espaces de vie spacieux, une alimentation équilibrée et des soins vétérinaires préventifs.",
        certifications: ["Label Rouge", "Bien-être Animal", "Élevage Extensif", "Producteur Fermier"]
      }
    },
    {
      id: 3,
      title: "Solutions Immobilières",
      icon: "bi-house-heart",
      image: `${process.env.PUBLIC_URL}/images/immobilier-rural.svg`,
      description: "Développement de solutions d'habitat rural moderne, écologique et adapté aux besoins des agriculteurs.",
      items: ["Maisons écologiques", "Fermes modernes", "Espaces de stockage", "Infrastructures agricoles"],
      details: {
        introduction: "Notre division immobilière conçoit et réalise des projets d'habitat rural innovants, alliant tradition et modernité pour répondre aux besoins spécifiques du monde agricole.",
        specialites: [
          {
            nom: "Maisons Écologiques",
            description: "Construction de maisons bioclimatiques utilisant des matériaux locaux et des technologies vertes pour un habitat durable.",
            avantages: ["Matériaux écologiques", "Efficacité énergétique", "Confort thermique", "Faible impact environnemental"]
          },
          {
            nom: "Fermes Modernes",
            description: "Conception de bâtiments agricoles fonctionnels intégrant les dernières innovations en matière d'élevage et de stockage.",
            avantages: ["Équipements modernes", "Optimisation des flux", "Bien-être animal", "Productivité accrue"]
          },
          {
            nom: "Espaces de Stockage",
            description: "Hangars et silos adaptés aux différents types de productions avec systèmes de conservation optimaux.",
            avantages: ["Stockage sécurisé", "Conservation optimale", "Accessibilité facilitée", "Modularité"]
          },
          {
            nom: "Infrastructures Agricoles",
            description: "Aménagement de systèmes d'irrigation, de drainage et d'accès pour optimiser l'exploitation agricole.",
            avantages: ["Irrigation efficace", "Drainage optimal", "Accès facilités", "Durabilité"]
          }
        ],
        processus: "Nous accompagnons nos clients de la conception à la réalisation, en passant par l'obtention des autorisations et le suivi de chantier.",
        certifications: ["RT 2020", "HQE", "PEFC", "Entrepreneur Qualifié"]
      }
    },
    {
      id: 4,
      title: "Services et Consulting",
      icon: "bi-lightbulb",
      image: `${process.env.PUBLIC_URL}/images/projets-en-cours.svg`,
      description: "Accompagnement et conseil pour optimiser les projets agro-immobiliers et maximiser la rentabilité.",
      items: ["Études de faisabilité", "Conseil en investissement", "Formation agricole", "Support technique"],
      details: {
        introduction: "Notre équipe d'experts accompagne les porteurs de projets agricoles et immobiliers avec des conseils personnalisés et un suivi professionnel.",
        specialites: [
          {
            nom: "Études de Faisabilité",
            description: "Analyse complète des projets agricoles et immobiliers avec étude de marché, rentabilité et risques.",
            avantages: ["Analyse approfondie", "Étude de marché", "Plan de financement", "Évaluation des risques"]
          },
          {
            nom: "Conseil en Investissement",
            description: "Accompagnement dans les choix d'investissement et optimisation fiscale pour les projets agro-immobiliers.",
            avantages: ["Optimisation fiscale", "Stratégie d'investissement", "Recherche de financements", "Suivi personnalisé"]
          },
          {
            nom: "Formation Agricole",
            description: "Programmes de formation sur les techniques modernes d'agriculture, d'élevage et de gestion d'exploitation.",
            avantages: ["Formation certifiante", "Techniques modernes", "Accompagnement pratique", "Mise à jour continue"]
          },
          {
            nom: "Support Technique",
            description: "Assistance technique continue pour l'optimisation des productions et la résolution des problématiques terrain.",
            avantages: ["Support 24/7", "Expertise terrain", "Solutions rapides", "Suivi personnalisé"]
          }
        ],
        processus: "Notre approche consultative combine expertise technique et connaissance du terrain pour proposer des solutions adaptées à chaque situation.",
        certifications: ["Consultant Agréé", "Formation Professionnelle", "Expertise Comptable", "Ingénierie Agricole"]
      }
    }
  ];

  const toggleExpand = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="container-fluid productions-section">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h1 className="productions-title">Nous Produisons Aussi</h1>
            <p className="productions-subtitle">
              Découvrez notre gamme complète de produits et services dans les domaines 
              de l'agriculture, l'élevage et l'immobilier rural
            </p>
          </div>
        </div>
        
        <div className="row">
          {productions.map((production, index) => (
            <div key={production.id} className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <div className={`production-card production-card-${index + 1}`}>
                <div className="production-header">
                  <div className="production-icon">
                    <i className={production.icon}></i>
                  </div>
                  <div className="production-image">
                    <img src={production.image} alt={production.title} />
                  </div>
                </div>
                <div className="production-body">
                  <h3 className="production-title">{production.title}</h3>
                  <p className="production-description">{production.description}</p>
                  <div className="production-items">
                    <h5>Nos spécialités :</h5>
                    <ul>
                      {production.items.map((item, idx) => (
                        <li key={idx}>
                          <i className="bi bi-check-circle-fill"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    className="btn btn-production"
                    onClick={() => toggleExpand(production.id)}
                  >
                    {expandedCard === production.id ? 'Réduire' : 'En savoir plus'}
                    <i className={`bi ${expandedCard === production.id ? 'bi-arrow-up' : 'bi-arrow-right'} ms-2`}></i>
                  </button>
                </div>
                
                {/* Section détails extensible */}
                {expandedCard === production.id && (
                  <div className="production-details">
                    <div className="details-content">
                      <div className="details-intro">
                        <h4><i className="bi bi-info-circle me-2"></i>À propos</h4>
                        <p>{production.details.introduction}</p>
                      </div>
                      
                      <div className="details-specialites">
                        <h4><i className="bi bi-star me-2"></i>Nos Spécialités Détaillées</h4>
                        <div className="row">
                          {production.details.specialites.map((spec, idx) => (
                            <div key={idx} className="col-md-6 mb-3">
                              <div className="specialite-card">
                                <h5>{spec.nom}</h5>
                                <p>{spec.description}</p>
                                <div className="avantages">
                                  <h6>Avantages :</h6>
                                  <ul>
                                    {spec.avantages.map((avantage, aIdx) => (
                                      <li key={aIdx}>
                                        <i className="bi bi-check2-circle me-2"></i>
                                        {avantage}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="details-processus">
                        <h4><i className="bi bi-gear me-2"></i>Notre Processus</h4>
                        <p>{production.details.processus}</p>
                      </div>
                      
                      <div className="details-certifications">
                        <h4><i className="bi bi-award me-2"></i>Certifications & Labels</h4>
                        <div className="certifications-grid">
                          {production.details.certifications.map((cert, cIdx) => (
                            <div key={cIdx} className="certification-badge">
                              <i className="bi bi-patch-check-fill me-2"></i>
                              {cert}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="production-cta">
              <h3>Intéressé par nos productions ?</h3>
              <p>Contactez-nous pour découvrir comment nous pouvons répondre à vos besoins</p>
              <button className="btn btn-cta" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Nous Contacter
                <i className="bi bi-telephone ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productions;
