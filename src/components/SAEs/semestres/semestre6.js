import React from "react";

function Semestre6() {
  const styles = {
    semesterContainer: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "800px",
      margin: "60px auto", // Ajoute un décalage pour la barre de navigation
      padding: "20px",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    semesterTitle: {
      color: "#333",
      marginBottom: "20px",
      fontSize: "2.6em",
    },
    semesterDescription: {
      marginBottom: "30px",
      color: "#666",
      fontSize: "1.2em",
    },
    comingSoon: {
      fontSize: "1.5em",
      color: "#555",
      marginTop: "20px",
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
      <h1 style={styles.semesterTitle}>Semestre 6</h1>
      <p style={styles.semesterDescription}>
        Cette page est en cours de développement. Revenez bientôt pour découvrir le contenu du semestre 6 !
      </p>
      <p style={styles.comingSoon}>
        🚧 En construction... 🚧
      </p>
      {/* Vous pouvez ajouter une image ici si nécessaire */}
      {/* <img src="path/to/image.jpg" alt="En construction" style={styles.resourceImage} /> */}
    </div>
  );
}

export default Semestre6;
