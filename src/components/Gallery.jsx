import React, { useRef, useEffect } from 'react';
import './Gallery.css';
import { galleryData } from '../data/galleryData';

export default function Gallery({ onViewMore }) {
    const containerRef = useRef(null);

    // Auto-scroll effect that moves through cards smoothly and loops back
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const intervalId = setInterval(() => {
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            
            // If near the end, loop back to the start; otherwise move forward by one card width
            if (container.scrollLeft >= maxScrollLeft - 10) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: 350, behavior: 'smooth' });
            }
        }, 3500); // Advances every 3.5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="gallery" className="gallery-section">
            <div className="gallery-header">
                <span className="gallery-tag">FEATURED STYLES</span>
                <h2>Crafted to Perfection</h2>
                <p>Explore a glimpse of our bespoke traditional wear and sharp contemporary designs.</p>
            </div>

            {/* Attached containerRef here so JS can control auto-scroll while retaining native drag/swipe */}
            <div className="gallery-container" ref={containerRef}>
                <div className="gallery-track">
                    {galleryData.featured.map((item) => (
                        <div 
                            key={item.id} 
                            className="gallery-card"
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

            <div className="gallery-action">
                <button onClick={onViewMore} className="view-more-btn">
                    View Full Collection ➔
                </button>
            </div>
        </section>
    );
}