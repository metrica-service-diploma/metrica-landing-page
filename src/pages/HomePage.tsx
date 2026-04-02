import React, { useEffect } from "react";

const HomePage: React.FC = () => {
  useEffect(() => {
    // tracker.pageview("/")
  }, []);

  return (
    <div style={styles.container}>
      <h1>Добро пожаловать!</h1>
      <p>Это главная страница нашего лендинга.</p>
      <button
        style={styles.button}
        onClick={() => {
          // tracker.event("click", "hero_button");
        }}
      >
        Узнать больше
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center" as const,
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default HomePage;
