import React from "react";

function SaeR105() {
  const styles = {
    saeContainer: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "800px",
      margin: "60px auto",
      padding: "20px",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    saeTitle: {
      color: "#333",
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "2.6em",
    },
    saeDescription: {
      textAlign: "center",
      marginBottom: "30px",
      color: "#666",
      fontSize: "1.2em",
    },
    section: {
      marginBottom: "40px",
    },
    sectionTitle: {
      color: "#007BFF",
      marginBottom: "10px",
      fontSize: "1.8em",
    },
    sectionContent: {
      backgroundColor: "#ffffff",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    sectionText: {
      margin: "0",
      color: "#555",
      fontSize: "1em",
    },
    resourceImage: {
      maxWidth: "100%",
      height: "auto",
      marginTop: "15px",
      borderRadius: "8px",
    },
  };

  return (
    <div style={styles.saeContainer}>
      <h1 style={styles.saeTitle}>SAE R1.05 : Technologie Mécanique et Fluidique 1</h1>
      <p style={styles.saeDescription}>
        Description et contenu de la SAE Technologie Mécanique et Fluidique 1...
      </p>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Objectifs</h2>
        <div style={styles.sectionContent}>
          <p style={styles.sectionText}>
            Maintenir en condition opérationnelle un système pluritechnique.
          </p>
          <p style={styles.sectionText}>
            Améliorer un système pluritechnique.
          </p>
          <p style={styles.sectionText}>
            Organiser l’installation d’un système pluritechnique.
          </p>
          <p style={styles.sectionText}>
            Participer à la gestion des moyens techniques et humains d’un service.
          </p>
          <p style={styles.sectionText}>
            Sécuriser le fonctionnement d’un système.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Travail Réalisé</h2>
        <div style={styles.sectionContent}>
          <p style={styles.sectionText}>
            Mettre ici des extraits de cours, de fiches, des liens, etc. pour montrer ce qui a été fait en cours.
          </p>
          {/* Ajoutez des images ici si nécessaire */}
          {/* <img src="path/to/image.jpg" alt="Description de l'image" style={styles.resourceImage} /> */}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Résultats et Apprentissages</h2>
        <div style={styles.sectionContent}>
          <p style={styles.sectionText}>
            Décrivez ici les résultats obtenus et les apprentissages réalisés au cours de cette SAE.
          </p>
        </div>
      </section>
    </div>
  );
}

export default SaeR105;
