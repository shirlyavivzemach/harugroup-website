import React from 'react';
import { FormDialog } from '../cmps/FormDialog';
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
        {/* <FormDialog/> */}
        </div>
    )
}
