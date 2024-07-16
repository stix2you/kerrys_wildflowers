import React from 'react';
import './Home.css';

function Home() {
   return (
      <div className="home">
         <section className="hero">
            <h1>Made on Earth, designed with you in mind.</h1>
            <p>Learn More</p>
         </section>
         <section className="content">
            <div className="image-placeholder">
               <img src="/background.jpg" alt="Background" />
            </div>
            <div className="text-placeholder">
               <h2>Section Title</h2>
               <p>Some placeholder text for this section. This will be replaced with actual content later.</p>
            </div>
         </section>
         <section className="content">
            <div className="image-placeholder">
               <img src="https://placehold.co/600x400" alt="Placeholder" />
            </div>
            <div className="text-placeholder">
               <h2>Another Section Title</h2>
               <p>Additional placeholder text for another section. This will also be replaced with actual content later.</p>
            </div>
         </section>
         {/* Add more sections as needed */}
      </div>
   );
}

export default Home;
