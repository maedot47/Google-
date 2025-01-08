import React, { useState } from 'react';
import './App.css';

function App() {
    // State to toggle the visibility of the map
    const [showMap, setShowMap] = useState(false);

    // Function to handle the "View Big Map" click
    const handleViewMapClick = () => {
        setShowMap(true);
    };

    return (
        <div className="App">
            {!showMap ? (
                // Intro screen
                <div className="intro-screen">
                    <h1>Welcome to the Map Experience</h1>
                    <p>Your journey starts here. Click below to explore the map!</p>
                    <button className="view-map-btn" onClick={handleViewMapClick}>
                        View Big Map
                    </button>
                </div>
            ) : (
                // Google Map iframe (Full-screen map)
                <div className="map-container">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.812183176285!2d-80.2655838!3d43.5381472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9a3a5896e8b5%3A0xf5d716cbb15b7a4b!2sGuelph%2C%20ON!5e0!3m2!1sen!2sca!4v1681234567890!5m2!1sen!2sca"
                        style={{ width: '100vw', height: '100vh', border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            )}
        </div>
    );
}

export default App;
