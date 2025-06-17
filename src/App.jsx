import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import styles from './App.module.css';

function Home() {
  const services = [
    { title: "Web Development", desc: "Responsive and modern web applications." },
    { title: "Mobile Apps", desc: "iOS & Android native and cross-platform apps." },
    { title: "Cloud Services", desc: "Scalable infrastructure and DevOps support." },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>Portfolio</h1>
        <nav>
          {/* Use Link for React Router navigation */}
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/" className={styles.navLink} scroll={el => el.scrollIntoView({ behavior: 'smooth' })}>Services</Link>
          {/* Link to Contact page */}
          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2 className={styles.heroTitle}>We Build Modern Tech Solutions</h2>
          <p className={styles.heroSubtitle}>Web Apps • Mobile Development • Cloud Infrastructure</p>
        </section>

        <section id="services" className={styles.servicesGrid}>
          {services.map(service => (
            <div key={service.title} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
            </div>
          ))}
        </section>

        <section className={styles.contactSection}>
          <h3 className={styles.contactTitle}>Let's Work Together</h3>
          {/* Link button to contact page */}
          <Link to="/contact" className={styles.contactButton}>Contact Us</Link>
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
