import React, { useState } from 'react';
import './Contact.css';
import { galleryData } from '../data/galleryData';

export default function Contact() {
    const [measurements, setMeasurements] = useState('');
    const [selectedStyles, setSelectedStyles] = useState([]);

    // Combines featured and archive collection items for style selection
    const allGalleryItems = [...galleryData.featured, ...galleryData.archive];

    const handleStyleToggle = (title) => {
        if (selectedStyles.includes(title)) {
            setSelectedStyles(selectedStyles.filter(s => s !== title));
        } else {
            setSelectedStyles([...selectedStyles, title]);
        }
    };

    // Dynamically format WhatsApp message with user measurements and picked styles
    const whatsappNumber = "2348035383795";
    const message = encodeURIComponent(
        `Hello Racheal, I would like to book a consultation and place a bespoke order with Chaeli's Fashion.\n\n` +
        `*Measurements & Notes:* ${measurements || 'Will provide during consultation'}\n` +
        `*Selected Styles:* ${selectedStyles.length > 0 ? selectedStyles.join(', ') : 'None selected yet'}`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <section id="contact" className="contact-section">
            <div className="contact-header">
                <span className="contact-tag">GET IN TOUCH</span>
                <h2>Book Your Consultation</h2>
                <p>Share your measurements, select preferred styles from our collection, and chat directly with Racheal Ayodeji in Lagos.</p>
            </div>

            <div className="contact-container">
                {/* Studio Info & Interactive Measurement/Style Form */}
                <div className="contact-info-card">
                    <h3>Studio Information</h3>
                    <div className="info-item">
                        <span className="info-label">Creative Director:</span>
                        <span className="info-value">Racheal Ayodeji</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Location:</span>
                        <span className="info-value">Lagos, Nigeria</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Business Hours:</span>
                        <span className="info-value">Mon - Sat: 9:00 AM - 6:00 PM</span>
                    </div>

                    <div className="interactive-form-group">
                        <h4 className="form-heading">1. Enter Your Measurements / Notes</h4>
                        <textarea 
                            className="contact-textarea"
                            placeholder="e.g., Chest: 42, Length: 30, Sleeve: 25, or any special preferences..."
                            value={measurements}
                            onChange={(e) => setMeasurements(e.target.value)}
                        />

                        <h4 className="form-heading">2. Pick Styles from Our Collection</h4>
                        <div className="styles-checkbox-grid">
                            {allGalleryItems.map((item) => (
                                <label 
                                    key={item.id} 
                                    className={`style-checkbox-item ${selectedStyles.includes(item.title) ? 'active' : ''}`}
                                >
                                    <input 
                                        type="checkbox" 
                                        checked={selectedStyles.includes(item.title)}
                                        onChange={() => handleStyleToggle(item.title)}
                                    />
                                    <span>{item.title}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Direct WhatsApp Booking Card */}
                <div className="contact-action-card">
                    <h3>Instant WhatsApp Booking</h3>
                    <p>Review your inputs and click below to send your measurements and selected styles straight to our WhatsApp chat.</p>
                    
                    <div className="order-summary-box">
                        <p><strong>Picked Styles:</strong> {selectedStyles.length > 0 ? selectedStyles.join(', ') : 'None selected'}</p>
                    </div>

                    <a 
                        href={whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="whatsapp-cta-btn"
                    >
                        Send Order & Chat on WhatsApp ➔
                    </a>
                </div>
            </div>
        </section>
    );
}