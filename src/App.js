import React, { useState } from 'react';
import './App.css';



function App() {
    const [showMap, setShowMap] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showMenu, setShowMenu] = useState(false);

    const handleViewMapClick = () => setShowMap(true);
    const toggleMenu = () => setShowMenu(!showMenu);

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
                        <span className="hamburger-icon" onClick={toggleMenu}>☰</span>
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

                    {/* Hamburger Dropdown Menu */}
                    {showMenu && (
                        <div className="dropdown-menu">
                            <div className="menu-header">
                                <span src="google map.png">"google map.png"</span>
                                <span className="close-menu" onClick={toggleMenu}>❌</span>
                            </div>
                            <div className="menu-options">
                                <p onClick={() => handleCategoryClick('Saved')}>
                                    <span className="material-icons">bookmark</span> Saved
                                </p>
                                <p onClick={() => handleCategoryClick('Recents')}>Recents</p>
                                <p onClick={() => handleCategoryClick('Your contributions')}>Your contributions</p>
                                <p onClick={() => handleCategoryClick('Location sharing')}>Location sharing</p>
                                <p onClick={() => handleCategoryClick('Your timeline')}>Your timeline</p>
                                <p onClick={() => handleCategoryClick('Your data in Maps')}>Your data in Maps</p>
                                <p onClick={() => handleCategoryClick('Share or embed map')}>Share or embed map</p>
                                <p onClick={() => handleCategoryClick('Print')}>Print</p>
                                <p onClick={() => handleCategoryClick('Add a missing place')}>Add a missing place</p>
                                <p onClick={() => handleCategoryClick('Add your business')}>Add your business</p>
                                <p onClick={() => handleCategoryClick('Edit the map')}>Edit the map</p>
                                <p onClick={() => handleCategoryClick('Tips and tricks')}>Tips and tricks</p>
                                <p onClick={() => handleCategoryClick('Get help')}>Get help</p>
                                <p onClick={() => handleCategoryClick('Consumer information')}>Consumer information</p>
                                <p onClick={() => handleCategoryClick('Language')}>Language</p>
                                <p onClick={() => handleCategoryClick('Search settings')}>Search settings</p>
                                <p onClick={() => handleCategoryClick('Maps activity')}>Maps activity</p>
                            </div>
                        </div>
                    )}

                    {/* Category Buttons */}
                    <div className="category-buttons">
                        <button className="category-btn" onClick={() => handleCategoryClick('restaurants')}>🍽️ Restaurants</button>
                        <button className="category-btn" onClick={() => handleCategoryClick('hotels')}>🏨 Hotels</button>
                        <button className="category-btn" onClick={() => handleCategoryClick('things to do')}>🎉 Things to Do</button>
                        <button className="category-btn" onClick={() => handleCategoryClick('museums')}>🏛️ Museums</button>
                        <button className="category-btn" onClick={() => handleCategoryClick('transit')}>🚉 Transit</button>
                        <button className="category-btn" onClick={() => handleCategoryClick('pharmacies')}>💊 Pharmacies</button>
                        <button className="category-btn" onClick={() => handleCategoryClick('atm')}>🏧 ATMs</button>
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
