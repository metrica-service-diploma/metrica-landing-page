import React, { useEffect } from "react";

const AboutPage: React.FC = () => {
  useEffect(() => {
    // tracker.pageview("/about");
  }, []);

  return (
    <div style={styles.container}>
      <h1>О нас</h1>
      <p>Мы - команда профессионалов, создающая качественные веб-решения.</p>
      <div style={styles.stats}>
        <div style={styles.statCard}>
          <h3>5+</h3>
          <p>лет опыта</p>
        </div>
        <div style={styles.statCard}>
          <h3>100+</h3>
          <p>проектов</p>
        </div>
        <div style={styles.statCard}>
          <h3>50+</h3>
          <p>клиентов</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center" as const,
  },
  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginTop: "2rem",
  },
  statCard: {
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    minWidth: "120px",
  },
};

export default AboutPage;
