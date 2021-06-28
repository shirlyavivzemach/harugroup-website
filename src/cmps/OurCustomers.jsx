import React from 'react'

export function OurCustomers() {
    let images = ["https://res.cloudinary.com/duzhu2ejx/image/upload/v1623924460/harugruops/1_afedmr.jpg",
        "https://res.cloudinary.com/duzhu2ejx/image/upload/v1623924465/harugruops/1-1_e2hsr7.jpg",
        "https://res.cloudinary.com/duzhu2ejx/image/upload/v1623924465/harugruops/12666_cucina-Family-Scavolini-Easy-02_etklhj.jpg",
        "https://res.cloudinary.com/duzhu2ejx/image/upload/v1623924474/harugruops/TIF_BEGRAND_REFORMA_C12_qfdtns.jpg"]
    return (

        <div className="customers main-container">
          
                <h2>Lamitex</h2>
            <div className="images-box card-grid">
{
    images.map(image => 
    <img src ={image} alt =""/>)
}
            </div>
        </div>
    )
}
