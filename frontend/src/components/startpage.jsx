import './startpage.css';

function StartPage() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <div className="hero-bg">
          <h1 className="hero-title">Tairis</h1>
          <h2 className="hero-subtitle">Doctor-Free First Aid Decision Tree</h2>
          <p className="hero-desc">Quick, reliable first-aid guidance for everyone.</p>
          <button className="start-btn" disabled>Get Started (Coming Soon)</button>
        </div>
      </header>
      <main className="landing-main">
        <section className="features">
          <h3>How Tairis Helps You</h3>
          <div className="feature-list">
            <div className="feature-item">
              <span role="img" aria-label="decision tree" className="feature-icon">🌳</span>
              <h4>Interactive Decision Tree</h4>
              <p>Answer simple questions and get step-by-step first-aid instructions tailored to your situation.</p>
            </div>
            <div className="feature-item">
              <span role="img" aria-label="speed" className="feature-icon">⚡</span>
              <h4>Fast & Reliable</h4>
              <p>Immediate help without waiting for a doctor. Designed for emergencies.</p>
            </div>
            <div className="feature-item">
              <span role="img" aria-label="user friendly" className="feature-icon">👍</span>
              <h4>User-Friendly</h4>
              <p>Simple, clean interface for anyone to use—no medical experience required.</p>
            </div>
          </div>
        </section>
        <section className="about">
          <h3>About the Project</h3>
          <p>
            Tairis is built using React, Express.js, Prisma, and MySQL. It stores each question and option in a database, allowing dynamic, interactive first-aid guidance.
          </p>
        </section>
      </main>
      <footer className="landing-footer">
        <small>&copy; 2025 Tairis. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default StartPage;
