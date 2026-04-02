import React, { useEffect } from "react";

const ServicesPage: React.FC = () => {
  useEffect(() => {
    // tracker.pageview("/services");
  }, []);

  const services = [
    { id: 1, name: "Веб-разработка", price: "от 500$" },
    { id: 2, name: "Мобильные приложения", price: "от 1000$" },
    { id: 3, name: "UI/UX дизайн", price: "от 300$" },
  ];

  return (
    <div style={styles.container}>
      <h1>Наши услуги</h1>
      <div style={styles.servicesList}>
        {services.map((service) => (
          <div key={service.id} style={styles.serviceCard}>
            <h3>{service.name}</h3>
            <p>{service.price}</p>
            <button
              style={styles.button}
              onClick={() => {
                // tracker.event("click", `service_${service.id}`);
              }}
            >
              Заказать
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center" as const,
  },
  servicesList: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginTop: "2rem",
    flexWrap: "wrap" as const,
  },
  serviceCard: {
    padding: "1.5rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "200px",
    textAlign: "center" as const,
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ServicesPage;
