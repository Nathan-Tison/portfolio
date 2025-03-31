import React from "react";

function Semestre1() {
  const styles = {
    semesterContainer: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "800px",
      margin: "60px auto", // Ajoute un décalage pour la barre de navigation
      padding: "20px",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    semesterTitle: {
      color: "#333",
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "2.6em",
    },
    semesterDescription: {
      textAlign: "center",
      marginBottom: "30px",
      color: "#666",
      fontSize: "1.2em",
    },
    resource: {
      marginBottom: "40px",
    },
    resourceTitle: {
      color: "#007BFF",
      marginBottom: "10px",
      fontSize: "1.8em",
    },
    resourceList: {
      listStyleType: "disc",
      marginLeft: "20px",
      marginBottom: "20px",
      fontSize: "1.1em",
    },
    resourceContent: {
      backgroundColor: "#ffffff",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    resourceContentText: {
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
    <div style={styles.semesterContainer}>
      <h1 style={styles.semesterTitle}>Semestre 1</h1>
      <p style={styles.semesterDescription}>Description et contenu des cours du semestre 1...</p>

      <section style={styles.resource}>
        <h2 style={styles.resourceTitle}>Ressource R1.01 : Mathématiques 1</h2>
        <ul style={styles.resourceList}>
          <li>Maintenir en condition opérationnelle un système pluritechnique</li>
          <li>Améliorer un système pluritechnique</li>
          <li>Organiser l’installation d’un système pluritechnique</li>
          <li>Participer à la gestion des moyens techniques et humains d’un service</li>
          <li>Sécuriser le fonctionnement d’un système</li>
        </ul>
        <div style={styles.resourceContent}>
          <p style={styles.resourceContentText}>Mettre ici des extraits de cours, de fiches, des liens, etc pour montrer ce qui a été fait en cours.</p>
          {/* Ajoutez des images ici si nécessaire */}
          {/* <img src="path/to/image.jpg" alt="Description de l'image" style={styles.resourceImage} /> */}
        </div>
      </section>

      <section style={styles.resource}>
        <h2 style={styles.resourceTitle}>Ressource R1.02 : Informatique 1</h2>
        <ul style={styles.resourceList}>
          <li>Maintenir en condition opérationnelle un système pluritechnique</li>
          <li>Améliorer un système pluritechnique</li>
          <li>Organiser l’installation d’un système pluritechnique</li>
          <li>Participer à la gestion des moyens techniques et humains d’un service</li>
        </ul>
        <div style={styles.resourceContent}>
          <p style={styles.resourceContentText}>Mettre ici des extraits de cours, de fiches, des liens, etc pour montrer ce qui a été fait en cours.</p>
        </div>
      </section>

      <section style={styles.resource}>
        <h2 style={styles.resourceTitle}>Ressource R1.03 : Mécanique et Matériaux 1</h2>
        <ul style={styles.resourceList}>
          <li>Maintenir en condition opérationnelle un système pluritechnique</li>
          <li>Améliorer un système pluritechnique</li>
          <li>Organiser l’installation d’un système pluritechnique</li>
          <li>Participer à la gestion des moyens techniques et humains d’un service</li>
        </ul>
        <div style={styles.resourceContent}>
          <p style={styles.resourceContentText}>Mettre ici des extraits de cours, de fiches, des liens, etc pour montrer ce qui a été fait en cours.</p>
        </div>
      </section>

      <section style={styles.resource}>
        <h2 style={styles.resourceTitle}>Ressource R1.04 : Génie Electrique 1</h2>
        <ul style={styles.resourceList}>
          <li>Maintenir en condition opérationnelle un système pluritechnique</li>
          <li>Améliorer un système pluritechnique</li>
          <li>Organiser l’installation d’un système pluritechnique</li>
          <li>Participer à la gestion des moyens techniques et humains d’un service</li>
          <li>Sécuriser le fonctionnement d’un système</li>
        </ul>
        <div style={styles.resourceContent}>
          <p style={styles.resourceContentText}>Mettre ici des extraits de cours, de fiches, des liens, etc pour montrer ce qui a été fait en cours.</p>
        </div>
      </section>

      <section style={styles.resource}>
        <h2 style={styles.resourceTitle}>Ressource R1.05 : Technologie Mécanique et Fluidique 1</h2>
        <ul style={styles.resourceList}>
          <li>Maintenir en condition opérationnelle un système pluritechnique</li>
          <li>Améliorer un système pluritechnique</li>
          <li>Organiser l’installation d’un système pluritechnique</li>
          <li>Participer à la gestion des moyens techniques et humains d’un service</li>
          <li>Sécuriser le fonctionnement d’un système</li>
        </ul>
        <div style={styles.resourceContent}>
          <p style={styles.resourceContentText}>Mettre ici des extraits de cours, de fiches, des liens, etc pour montrer ce qui a été fait en cours.</p>
        </div>
      </section>

      <section style={styles.resource}>
        <h2 style={styles.resourceTitle}>Ressource R1.06 : Électricité et automatismes industriels 1</h2>
        <ul style={styles.resourceList}>
          <li>Maintenir en condition opérationnelle un système pluritechnique</li>
          <li>Améliorer un système pluritechnique</li>
          <li>Organiser l’installation d’un système pluritechnique</li>
          <li>Participer à la gestion des moyens techniques et humains d’un service</li>
          <li>Sécuriser le fonctionnement d’un système</li>
        </ul>
        <div style={styles.resourceContent}>
          <p style={styles.resourceContentText}>Mettre ici des extraits de cours, de fiches, des liens, etc pour montrer ce qui a été fait en cours.</p>
        </div>
      </section>

      <section style={styles.resource}>
        <h2 style={styles.resourceTitle}>Ressource R1.07 : Méthodes et Outils de Maintenance 1</h2>
        <ul style={styles.resourceList}>
          <li>Maintenir en condition opérationnelle un système pluritechnique</li>
          <li>Améliorer un système pluritechnique</li>
          <li>Participer à la gestion des moyens techniques et humains d’un service</li>
        </ul>
        <div style={styles.resourceContent}>
          <p style={styles.resourceContentText}>Mettre ici des extraits de cours, de fiches, des liens, etc pour montrer ce qui a été fait en cours.</p>
        </div>
      </section>

      <section style={styles.resource}>
        <h2 style={styles.resourceTitle}>Ressource R1.08 : Organisation des systèmes industriels 1</h2>
        <ul style={styles.resourceList}>
          <li>Maintenir en condition opérationnelle un système pluritechnique</li>
          <li>Participer à la gestion des moyens techniques et humains d’un service</li>
          <li>Sécuriser le fonctionnement d’un système</li>
        </ul>
        <div style={styles.resourceContent}>
          <p style={styles.resourceContentText}>Mettre ici des extraits de cours, de fiches, des liens, etc pour montrer ce qui a été fait en cours.</p>
        </div>
      </section>

      <section style={styles.resource}>
        <h2 style={styles.resourceTitle}>Ressource R1.09 : Techniques d’Expression et de Communication 1</h2>
        <ul style={styles.resourceList}>
          <li>Maintenir en condition opérationnelle un système pluritechnique</li>
          <li>Améliorer un système pluritechnique</li>
          <li>Organiser l’installation d’un système pluritechnique</li>
          <li>Participer à la gestion des moyens techniques et humains d’un service</li>
          <li>Sécuriser le fonctionnement d’un système</li>
        </ul>
        <div style={styles.resourceContent}>
          <p style={styles.resourceContentText}>Mettre ici des extraits de cours, de fiches, des liens, etc pour montrer ce qui a été fait en cours.</p>
        </div>
      </section>

      <section style={styles.resource}>
        <h2 style={styles.resourceTitle}>Ressource R1.10 : Anglais 1</h2>
        <ul style={styles.resourceList}>
          <li>Maintenir en condition opérationnelle un système pluritechnique</li>
          <li>Améliorer un système pluritechnique</li>
          <li>Organiser l’installation d’un système pluritechnique</li>
          <li>Participer à la gestion des moyens techniques et humains d’un service</li>
          <li>Sécuriser le fonctionnement d’un système</li>
        </ul>
        <div style={styles.resourceContent}>
          <p style={styles.resourceContentText}>Mettre ici des extraits de cours, de fiches, des liens, etc pour montrer ce qui a été fait en cours.</p>
        </div>
      </section>

      <section style={styles.resource}>
        <h2 style={styles.resourceTitle}>Ressource R1.11 : Projet Personnel et Professionnel 1</h2>
        <ul style={styles.resourceList}>
          <li>Maintenir en condition opérationnelle un système pluritechnique</li>
          <li>Améliorer un système pluritechnique</li>
          <li>Organiser l’installation d’un système pluritechnique</li>
          <li>Participer à la gestion des moyens techniques et humains d’un service</li>
          <li>Sécuriser le fonctionnement d’un système</li>
        </ul>
        <div style={styles.resourceContent}>
          <p style={styles.resourceContentText}>Mettre ici des extraits de cours, de fiches, des liens, etc pour montrer ce qui a été fait en cours.</p>
        </div>
      </section>
    </div>
  );
}

export default Semestre1;
