import React from 'react';
import './Process.css';
import dressHolderIcon from '../assets/dress-holder-svgrepo-com.svg';
import tapeLineIcon from '../assets/measure-2-svgrepo-com.svg';
import scissorsIcon from '../assets/scissors-svgrepo-com.svg';
import dressIcon from '../assets/dress-svgrepo-com.svg';

export default function Process() {
    return (
        <section id="process" className="process-section">
            <div className="process-header">
                <span className="process-tag">OUR CRAFTSMANSHIP</span>
                <h2>How We Bring Your Vision to Life</h2>
            </div>
            
            <div className="process-grid">
                <div className="process-step">
                    <img src={dressHolderIcon} alt="Consultation" className="step-icon" />
                    
                    <h3>Consultation & Design</h3>
                    <p>
                        We discuss your style preferences, event requirements, and help you select the ideal fabric for your look.
                    </p>
                </div>
                
                <div className="process-step">
                    <img src={tapeLineIcon} alt="Measurement" className="step-icon" />
                    
                    <h3>Precision Measurement</h3>
                    <p>
                        Tailored specifically to your body. We take accurate structural measurements to guarantee a flawless, comfortable fit.
                    </p>
                </div>
                
                <div className="process-step">
                    <img src={scissorsIcon} alt="Craftsmanship" className="step-icon" />
                    
                    <h3>Expert Craftsmanship</h3>
                    <p>
                        Expert stitching, meticulous construction, and rigorous quality fine-tuning bring your custom garment to reality.
                    </p>
                </div>
                
                <div className="process-step">
                    <img src={dressIcon} alt="Delivery" className="step-icon" />
                    
                    <h3>Final Delivery</h3>
                    <p>
                        Receive your perfectly fitted, luxury custom outfit, ready for you to step out in timeless style.
                    </p>
                </div>
            </div>
        </section>
    );
}