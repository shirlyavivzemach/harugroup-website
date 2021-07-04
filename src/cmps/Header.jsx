import React,{useState} from 'react';
import { ContactForm } from './ContactForm';
import { FormDialog } from './FormDialog';
export function Header() {

    
   
    return (
        <div >
         
         <img className="app-header" src ="https://res.cloudinary.com/duzhu2ejx/image/upload/v1619622904/home-design/header-bg_zjtmsa.jpg" alt =""/> 
         <div className="caption flex">Harugroups The Best Choice For Your Design
      
         <ContactForm  className="contact-button"/>
        
        
         </div>
         
        </div>
    )
}
