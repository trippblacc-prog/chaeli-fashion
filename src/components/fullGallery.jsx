import React from 'react';
import './FullGallery.css';
import { galleryData } from '../data/galleryData';

export default function FullGallery({ onBack }) {
    // Combines featured and archive lists so everything shows up on the full page
    const allImages = [...galleryData.featured, ...galleryData.archive];

    return (
        <div className="full-gallery-page">
            <div className="full-gallery-header">
                <button onClick={onBack} className="back-btn">← Back to Home</button>
                <span className="gallery-tag">COMPLETE ARCHIVE</span>
                <h2>The Chaeli's Fashion Collection</h2>
                <p>Browse our entire portfolio of custom bespoke tailoring.</p>
            </div>

            <div className="full-gallery-grid">
                {allImages.map((item) => (
                    <div 
                        key={item.id} 
                        className="full-gallery-card"
                        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${item.image})` }}
                    >
                        <div className="gallery-overlay">
                            <h3>{item.title}</h3>
                            <span>{item.category}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}