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
            mapFrame.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCGkIgiwfZyiMUzV1RosqmdlhVBKYBInu0=${encodeURIComponent(searchQuery)}`;
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
                    <iframe
                        id="mapFrame"
                        title="Google Map"
                        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Guelph,ON`}
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
