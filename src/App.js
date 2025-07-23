import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="gradient-bg"></div>
      <div className="noise"></div>

      {/* Header Navigation */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <svg className="logo-svg" width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#14b8a6" }} />
                    <stop offset="50%" style={{ stopColor: "#0ea5e9" }} />
                    <stop offset="100%" style={{ stopColor: "#8b5cf6" }} />
                  </linearGradient>
                </defs>
                <path d="M25 50 C15 30, 35 30, 50 50 S85 70, 75 50 S50 30, 50 50 S15 70, 25 50 Z"
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
                <circle cx="70" cy="35" r="3" fill="#f43f5e" />
              </svg>
              <span className="logo-text">Futureloop AI</span>
            </div>

            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <a href="#platform" className="nav-link">Platform</a>
              <a href="#solutions" className="nav-link">Solutions</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#contact" className="nav-link">Contact</a>
              <a href="https://youtu.be/2mJ6aRebQoY" target="_blank" rel="noopener noreferrer" className="nav-cta">Request Demo</a>
            </div>

            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              AI-Native AMS for
              <span className="gradient-text"> Commercial Insurance</span>
            </h1>
            <p className="hero-subtitle">
              The first Agency Management System designed from the ground up with autonomous AI agents.
              Supercharge your commercial insurance workflows with intelligent automation.
            </p>
            <div className="hero-cta">
              <a href="mailto:laasya@futureloop.ai" className="cta-primary">Get Started</a>
              <a href="https://youtu.be/2mJ6aRebQoY" target="_blank" rel="noopener noreferrer" className="cta-secondary">Watch Demo</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10x</span>
                <span className="stat-label">Faster Processing</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Automation Rate</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">AI Assistant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="platform-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Reimagining Insurance Technology</h2>
            <p className="section-subtitle">
              Traditional AMS platforms are retrofitted CRMs with forms and PDFs. We're building the entire system
              from scratch with autonomous assistants that understand each account.
            </p>
          </div>

          <div className="platform-features">
            <div className="platform-feature">
              <div className="feature-icon">🤖</div>
              <h3>Autonomous AI Agents</h3>
              <p>Not just insights — AI that takes actions on behalf of brokers and underwriters</p>
            </div>
            <div className="platform-feature">
              <div className="feature-icon">🔗</div>
              <h3>Universal Integration</h3>
              <p>Connects to policy data, carrier APIs, internal documents, and emails seamlessly</p>
            </div>
            <div className="platform-feature">
              <div className="feature-icon">⚡</div>
              <h3>End-to-End Automation</h3>
              <p>Handles quoting, underwriting, and broker-carrier coordination automatically</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="solutions-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What You Can Ask Your AI Assistant</h2>
            <p className="section-subtitle">Natural language commands that transform into automated workflows</p>
          </div>

          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-header">
                <h4>Autonomous Renewals</h4>
                <span className="solution-badge">Renewal Management</span>
              </div>
              <div className="solution-example">
                "Renew all policies expiring next month and flag ones with premium increases &gt;10%"
              </div>
              <ul className="solution-features">
                <li>Automatic renewal processing</li>
                <li>Premium increase analysis</li>
                <li>Exception flagging and reporting</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-header">
                <h4>Intelligent Quoting</h4>
                <span className="solution-badge">Risk Assessment</span>
              </div>
              <div className="solution-example">
                "Quote this landscaping company with carriers that cover pesticide exposure"
              </div>
              <ul className="solution-features">
                <li>Risk-based carrier matching</li>
                <li>Automated application pre-filling</li>
                <li>Coverage optimization</li>
              </ul>
            </div>

            <div className="solution-card">
              <div className="solution-header">
                <h4>Automated Follow-ups</h4>
                <span className="solution-badge">Communication</span>
              </div>
              <div className="solution-example">
                "Follow up with Travelers and Chubb — they haven't responded to our submissions"
              </div>
              <ul className="solution-features">
                <li>Multi-carrier status tracking</li>
                <li>Automated follow-up scheduling</li>
                <li>Response monitoring and alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Making Insurance Workflows Autonomous</h2>
              <p className="about-description">
                We're not just digitizing insurance workflows — we're making them autonomous.
                Our AI handles the back-and-forth, tracks status across markets, pre-fills applications,
                and summarizes every touchpoint in your CRM automatically.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <strong>Connects Everything:</strong> Policy data, carrier APIs, internal documents, and emails
                </div>
                <div className="about-feature">
                  <strong>Takes Action:</strong> Handles back-and-forth, tracks status across markets, pre-fills applications
                </div>
                <div className="about-feature">
                  <strong>Automates Workflows:</strong> Not just insights — autonomous actions on behalf of users
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="workflow-diagram">
                <div className="workflow-step">
                  <div className="step-number">1</div>
                  <div className="step-title">Analyze</div>
                </div>
                <div className="workflow-arrow">→</div>
                <div className="workflow-step">
                  <div className="step-number">2</div>
                  <div className="step-title">Process</div>
                </div>
                <div className="workflow-arrow">→</div>
                <div className="workflow-step">
                  <div className="step-number">3</div>
                  <div className="step-title">Execute</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Ready to Transform Your Insurance Operations?</h2>
            <p className="contact-subtitle">
              Join the future of commercial insurance technology. Get in touch to see how Futureloop AI
              can automate your workflows and supercharge your team's productivity.
            </p>
            <div className="contact-options">
              <div className="contact-option">
                <a href="https://youtu.be/2mJ6aRebQoY" target="_blank" rel="noopener noreferrer" className="contact-btn primary">Schedule Demo</a>
              </div>
              <div className="contact-option">
                <a href="mailto:laasya@futureloop.ai" className="contact-email">laasya@futureloop.ai</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <svg className="logo-svg" width="24" height="24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#14b8a6" }} />
                    <stop offset="50%" style={{ stopColor: "#0ea5e9" }} />
                    <stop offset="100%" style={{ stopColor: "#8b5cf6" }} />
                  </linearGradient>
                </defs>
                <path d="M25 50 C15 30, 35 30, 50 50 S85 70, 75 50 S50 30, 50 50 S15 70, 25 50 Z"
                  fill="none"
                  stroke="url(#footerLogoGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
                <circle cx="70" cy="35" r="3" fill="#f43f5e" />
              </svg>
              <span>Futureloop AI</span>
            </div>
            <div className="footer-text">
              <p>&copy; 2024 Futureloop AI. Building the future of insurance technology.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
