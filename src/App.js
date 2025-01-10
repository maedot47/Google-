import React, { useState } from 'react';
import './App.css';



function App() {
    const [showMap, setShowMap] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleViewMapClick = () => setShowMap(true);

    const handleSearch = (e) => {
        e.preventDefault();
        const mapFrame = document.getElementById('mapFrame');
        if (mapFrame && searchQuery) {
            mapFrame.src = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(searchQuery)}`;
        }
    };
    const handleCategoryClick = (category) => {
        const mapFrame = document.getElementById('mapFrame');
        if (mapFrame) {
            mapFrame.src = `https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&q=${category}`;
        }
    };
    
    
    return (
        <div className="App">
            {!showMap ? (
                <div className="intro-screen">
                    <h1>Welcome to the Map Experience</h1>
                    <button className="view-map-btn" onClick={handleViewMapClick}>
                        View Big Map
                    </button>
                </div>
            ) : (
                <div className="map-container">
                    <form className="search-bar" onSubmit={handleSearch}>
                        <span className="hamburger-icon">☰</span>
                        <input
                            type="text"
                            placeholder="Search for a location"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="search-btn">Search</button>
                    </form>
                    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100&icon_names=settings" rel="stylesheet" />
                
                    
                    <span class="material-symbols-outlined">settings</span>

                    {/* Category Buttons */}
                    <div className="category-buttons">
                        <button onClick={() => handleCategoryClick('restaurants')}>🍽️ Restaurants</button>
                        <button onClick={() => handleCategoryClick('hotels')}>🏨 Hotels</button>
                        <button onClick={() => handleCategoryClick('things to do')}>🎉 Things to Do</button>
                        <button onClick={() => handleCategoryClick('museums')}>🏛️ Museums</button>
                        <button onClick={() => handleCategoryClick('transit')}>🚉 Transit</button>
                        <button onClick={() => handleCategoryClick('pharmacies')}>💊 Pharmacies</button>
                        <button onClick={() => handleCategoryClick('atm')}>🏧 ATMs</button>
                    </div>

                    <iframe
                        id="mapFrame"
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.812183176285!2d-80.2655838!3d43.5381472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9a3a5896e8b5%3A0xf5d716cbb15b7a4b!2sGuelph%2C%20ON!5e0!3m2!1sen!2sca!4v1681234567890!5m2!1sen!2sca"
                        style={{ width: '100vw', height: '100vh', border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            )}
        </div>
    );
}

export default App;
