import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    author: 'Juan Pérez',
    rating: 5,
    quote: '¡Este servicio es increíble, realmente cambió mi vida!',
  },
  {
    author: 'María González',
    rating: 4,
    quote: 'Muy buena experiencia, recomendable.',
  },
  {
    author: 'Pedro Rodríguez',
    rating: 5,
    quote: 'No podría estar más satisfecho, superó mis expectativas.',
  },
  {
    author: 'Ana López',
    rating: 4,
    quote: 'Buen servicio, pero podría mejorar en algunos aspectos.',
  }
];

const Testimonials = () => {
  return (
    <>
        <div className="app__testimonials"> {/*TODO!!! add a class name here*/}
            <div className="app__specialMenu-title">
                <h1 className="headtext__cormorant_black">Testimonios</h1>
                <h2 className="p__opensans_black">Experiencias de quienes ya se sumaron a nuestra comunidad de PoleSport y PoleDance.</h2>  
            </div>
        
            <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial">
                <div className="cloud">
                    <div className="stars">
                    {'★'.repeat(testimonial.rating)}
                    {'☆'.repeat(5 - testimonial.rating)}
                    </div>
                    <p className="quote">"{testimonial.quote}"</p>
                </div>
                <div className="author">- {testimonial.author}</div>
                </div>
            ))}
            </div>
        </div>
    </>
    
  );
}

export default Testimonials;
