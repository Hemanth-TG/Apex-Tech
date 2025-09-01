import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Apex Tech</h1>
            <p className="hero-subtitle">Engineering Your Digital World</p>
            <p className="hero-description">
              From high-performance custom PCs to seamless smart homes and robust IT solutions, 
              we integrate technology into your life and business.
            </p>
            <Link to="/build" className="btn btn-primary btn-lg">
              Build Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">We build, automate, and support the technology that powers your world</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🖥️</div>
              <h3>Custom PC Builds</h3>
              <p>Whether you're a gamer, creator, or professional, we design and build custom PCs with meticulous attention to detail, performance, and aesthetics.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>PC Repair & Upgrades</h3>
              <p>Software fixes, hardware upgrades, and comprehensive diagnostics at competitive rates with expert technical support.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>Tech Consultation</h3>
              <p>Not sure what to buy? Get professional advice before your next PC investment. We help you make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="advantages">
        <div className="container">
          <h2 className="section-title">The Apex Advantage</h2>
          <p className="section-subtitle">We're more than just a tech company. We're your local partner in innovation.</p>

          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">⭐</div>
              <h3>Expert Advice</h3>
              <p>Tailored recommendations based on your specific needs, budget, and performance requirements.</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">💰</div>
              <h3>Transparent Pricing</h3>
              <p>No hidden charges or surprises. Clear, upfront pricing for all our services and builds.</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround times with ongoing support and warranty coverage for peace of mind.</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">🎯</div>
              <h3>Premium Components</h3>
              <p>Only the best components from trusted brands, professionally assembled and tested.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Builds Gallery */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">Featured Builds</h2>
          <p className="section-subtitle">Precision-crafted PCs tailored to your needs</p>

          <div className="gallery-grid">
            <div className="build-card">
              <div className="build-header">
                <h3>Gaming Beast</h3>
                <span className="build-price">$1,500 - $4,000</span>
              </div>
              <p className="build-description">High-end gaming rigs for 4K gaming and VR experiences</p>
              <ul className="build-specs">
                <li>RTX 4080/4090</li>
                <li>Intel i7/i9 or AMD Ryzen 7/9</li>
                <li>32GB DDR5 RAM</li>
                <li>1TB NVMe SSD</li>
              </ul>
              <Link to="/build" className="btn btn-secondary">
                Customize This Build
              </Link>
            </div>

            <div className="build-card">
              <div className="build-header">
                <h3>Creator Workstation</h3>
                <span className="build-price">$2,000 - $5,000</span>
              </div>
              <p className="build-description">Powerful workstations for content creation and professional work</p>
              <ul className="build-specs">
                <li>RTX 4070/4080</li>
                <li>Intel i7/i9 or AMD Ryzen 9</li>
                <li>64GB DDR5 RAM</li>
                <li>2TB NVMe SSD</li>
              </ul>
              <Link to="/build" className="btn btn-secondary">
                Customize This Build
              </Link>
            </div>

            <div className="build-card">
              <div className="build-header">
                <h3>Budget Champion</h3>
                <span className="build-price">$600 - $1,200</span>
              </div>
              <p className="build-description">Affordable PCs that don't compromise on quality</p>
              <ul className="build-specs">
                <li>GTX 1660/RTX 3060</li>
                <li>Intel i5 or AMD Ryzen 5</li>
                <li>16GB DDR4 RAM</li>
                <li>500GB SSD</li>
              </ul>
              <Link to="/build" className="btn btn-secondary">
                Customize This Build
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Something Amazing?</h2>
            <p>Have a project in mind? We'd love to hear about it. Get a free consultation today.</p>
            <div className="cta-buttons">
              <Link to="/build" className="btn btn-primary btn-lg">
                Start Your Build →
              </Link>
              <a href="mailto:info@apex-tech.com" className="btn btn-outline btn-lg">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;