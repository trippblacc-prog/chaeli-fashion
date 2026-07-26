import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

export default function Hero() {
    return (
        <section id="hero" className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <span className="hero-tag">Bespoke Tailoring & Design</span>
                <h1>Impeccable Fit. Timeless Style. Crafted by Chaeli's Fashion.</h1>
                <p>
                    Step into custom-made clothing designed exclusively for your body and your moments. 
                    From striking traditional wear to sharp contemporary looks, experience luxury tailoring built on precision and care.
                </p>
                <div className="hero-actions">
                    <a 
                        href="https://wa.me/234XXXXXXXXXX?text=Hello%20Chaeli's%20Fashion,%20I%20would%20like%20to%20book%20a%20consultation." 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cta-whatsapp"
                    >
                        💬 Chat on WhatsApp to Book
                    </a>
                </div>
            </div>
        </section>
    );
}