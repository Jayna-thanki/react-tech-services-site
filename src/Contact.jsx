import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './App.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    emailjs.send(
      'service_ercv6wn',
      'template_lpxpqhc',
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      'eF9-wWzoUHkaRJacv'
    )
    .then(() => {
      setLoading(false);
      setSubmitted(true);
    }, (err) => {
      setLoading(false);
      setError('Failed to send message, please try again.');
      console.error(err);
    });
  };

  if (submitted) {
    return (
      <div className={styles.contactSection}>
       <h2 className={styles.contactTitle}>Thank you!</h2>
<p className={styles.successMessage}>We received your message and will get back to you shortly.</p>

      </div>
    );
  }

  return (
    <section className={styles.contactSection}>
         <div className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
        <label htmlFor="name">Name</label>
        <input
          className={styles.inputField}
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />
        <label htmlFor="email">Email</label>
        <input
          className={styles.inputField}
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
        />
        <label htmlFor="message">Message</label>
        <textarea
          className={styles.textArea}
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Write your message here"
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button
          type="submit"
          className={styles.contactButton}
          disabled={loading}
          style={{ marginTop: '1rem', width: '100%', opacity: loading ? 0.6 : 1 }}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      </div>
    </section>
  );
}
