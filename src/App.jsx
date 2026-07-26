import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Gallery from './components/Gallery';
import FullGallery from './components/FullGallery';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    const [currentView, setCurrentView] = useState('home');

    return (
        <div className="app-container">
            <Header />
            {currentView === 'home' ? (
                <main>
                    <Hero />
                    <Process />
                    <Gallery onViewMore={() => setCurrentView('full-gallery')} />
                    <Testimonial />
                    <Contact />
                    <Footer />
                </main>
            ) : (
                <FullGallery onBack={() => setCurrentView('home')} />
            )}
        </div>
    );
}