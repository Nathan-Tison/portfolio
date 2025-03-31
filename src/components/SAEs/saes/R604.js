import React from "react";

function SAE604() {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "800px",
      margin: "60px auto",
      padding: "20px",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    title: { color: "#333", marginBottom: "20px", fontSize: "2.6em" },
    description: { marginBottom: "30px", color: "#666", fontSize: "1.2em" },
    comingSoon: { fontSize: "1.5em", color: "#555", marginTop: "20px" },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>SAE 6.04</h1>
      <p style={styles.description}>
        Cette page est en cours de développement. Revenez bientôt pour découvrir le contenu de la SAE 6.04 !
      </p>
      <p style={styles.comingSoon}>🚧 En construction... 🚧</p>
    </div>
  );
}

export default SAE604;
