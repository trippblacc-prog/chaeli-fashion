import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <nav className="top-nav">
            <div className="nav-brand">Chaeli's Fashion</div>
            <ul className="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}