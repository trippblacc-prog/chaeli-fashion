import React, { useRef, useEffect } from 'react';
import './Testimonial.css';

const testimonialsData = [
    {
        id: 1,
        name: "Teni Ojo",
        role: "Traditional Wear Client",
        quote: "The fit of my custom dress is absolute perfection. Chaeli's Fashion pays attention to every single structural detail.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 2,
        name: "Sandra Mella",
        role: "Executive Suit Client",
        quote: "The fabric quality is unmatched. I received endless compliments at the gala thanks to the sharp, clean tailoring.",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 3,
        name: "Michelle Chen",
        role: "Bespoke Customer",
        quote: "Finding a tailor who understands precision measurement and modern style is rare. Truly exceptional craftsmanship.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 4,
        name: "Sarah Williams",
        role: "Event Styling Client",
        quote: "Impeccable execution! The outfit fits like a second skin and the delivery was right on schedule.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 5,
        name: "Aisha Musa",
        role: "Regular Client",
        quote: "The consultation process was thorough, and the final piece exceeded all my expectations. Worth every single penny.",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 6,
        name: "Emmanuella Okoro",
        role: "Contemporary Wear Client",
        quote: "Sharp lines, premium feel, and flawless delivery. Chaeli's Fashion is my absolute go-to for bespoke wear now.",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
    }
];

export default function Testimonials() {
    const containerRef = useRef(null);

    // Auto-scroll loop effect combined with manual friction-free drag/swipe
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const intervalId = setInterval(() => {
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            
            if (container.scrollLeft >= maxScrollLeft - 10) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: 400, behavior: 'smooth' });
            }
        }, 4000); // Advances every 4 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="testimonials-header">
                <span className="testimonials-tag">TESTIMONIALS</span>
                <h2>Trusted by Our Clients</h2>
                <p>Read what our clients have to say about our fit, quality fabrics, and attention to detail.</p>
            </div>

            <div className="testimonials-container" ref={containerRef}>
                <div className="testimonials-track">
                    {testimonialsData.map((item) => (
                        <div key={item.id} className="testimonial-card">
                            <img src={item.image} alt={item.name} className="testimonial-avatar" />
                            <div className="testimonial-content">
                                <p className="testimonial-quote">"{item.quote}"</p>
                                <h4 className="testimonial-name">{item.name}</h4>
                                <span className="testimonial-role">{item.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}