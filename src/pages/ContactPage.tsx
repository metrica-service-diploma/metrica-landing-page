import React, { useState, useEffect } from "react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // tracker.pageview("/contact");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // tracker.event("form_submit", "contact_form", JSON.stringify(formData));
    alert("Сообщение отправлено!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.container}>
      <h1>Свяжитесь с нами</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Сообщение"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
        <button type="submit" style={styles.button}>
          Отправить
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center" as const,
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    maxWidth: "400px",
    margin: "0 auto",
    gap: "1rem",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  textarea: {
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    minHeight: "100px",
  },
  button: {
    padding: "0.75rem",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ContactPage;
