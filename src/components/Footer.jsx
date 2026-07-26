import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>Chaeli's Fashion</h3>
                    <p>Bespoke tailoring and luxury custom wear crafted with precision in Lagos, Nigeria.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#process">Process</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact & Booking</a></li>
                    </ul>
                </div>

                <div className="footer-socials">
                    <h4>Connect With Us</h4>
                    <div className="social-links-grid">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">Telegram</a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Chaeli's Fashion. All rights reserved. Directed by Racheal Ayodeji.</p>
            </div>
        </footer>
    );
}