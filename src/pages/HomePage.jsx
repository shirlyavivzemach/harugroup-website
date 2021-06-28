import React from 'react';
import { Nav } from '../cmps/Nav';
import { Header } from '../cmps/Header';
import { About } from '../cmps/About';
import { OurCustomers } from '../cmps/OurCustomers';
import { ContactForm } from '../cmps/ContactForm';
export function HomePage() {
    return (
        <div className="hero">
     
            <Header />
            <About />
            <OurCustomers/>
            <ContactForm/>
        </div>
    )
}
