import React, { useState, useCallback } from 'react';
import './App.css';
import axios from 'axios';
import {
    APIProvider,
    Map,
 Marker,
    Pin
} from '@vis.gl/react-google-maps';

function App() {
    const [showMap, setShowMap] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const [mapUrl, setMapUrl] = useState('');

    const handleViewMapClick = () => setShowMap(true);
    const toggleMenu = () => setShowMenu(!showMenu);


    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

    const handleSearch = async (e) => {
        e.preventDefault();
        const mapFrame = document.getElementById('mapFrame');
        if (mapFrame && searchQuery) {
            mapFrame.src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(searchQuery)}`;
        }
    };

    const handleCategoryClick = (category) => {
        const mapFrame = document.getElementById('mapFrame');
        if (mapFrame) {
            mapFrame.src = `https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=${category}`;
        }
    };

    const locations = [

        { key: 'OLOL', location: { lat: 43.54771492657215, lng: -80.26824871298138 }, clickHandler: (ev) => {console.log("you clicked on OLOL")} },
        { key: 'Main Entrance', location: { lat: -33.8567844, lng: 151.213108 }, clickHandler: (ev) => {console.log("you clicked on Main")} },
        { key: 'Tech Entrance', location: { lat: -33.8472767, lng: 151.2188164 }, clickHandler: (ev) => {console.log("you clicked on Tech")} },
    ];

    return (
        <div className="App">
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
            />

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
                        <span
                            className="material-symbols-outlined directions-icon-wrapper"
                            title="Directions"
                            data-tooltip="Directions"
                        >
                            directions
                        </span>
                    </form>

                    {showMenu && (
                        <div className="dropdown-menu">
                            <div className="menu-header">
                                <span className="google-map-icon">🗺️</span>
                                <span className="close-menu" onClick={toggleMenu}>❌</span>
                            </div>
                            <div className="menu-options">
                                <p onClick={() => handleCategoryClick('Saved')}>
                                    <span className="material-symbols-outlined">bookmark</span> Saved
                                </p>
                                <p onClick={() => handleCategoryClick('Recents')}>
                                    <span className="material-symbols-outlined">schedule</span> Recents
                                </p>
                                <p onClick={() => handleCategoryClick('Your contributions')}>
                                    <span className="material-symbols-outlined">rate_review</span> Your contributions
                                </p>
                                <p onClick={() => handleCategoryClick('Location sharing')}>
                                    <span className="material-symbols-outlined">record_voice_over</span> Location sharing
                                </p>
                                <p onClick={() => handleCategoryClick('Your timeline')}>
                                    <span className="material-symbols-outlined">timeline</span> Your timeline
                                </p>
                                <p
                                    onClick={() => handleCategoryClick('Your data in Maps')}
                                    className="menu-option data-in-maps"
                                >
                                    <span className="material-symbols-outlined">shield_person</span> Your data in Maps
                                </p>
                                <p onClick={() => handleCategoryClick('Share or embed map')}>
                                    <span className="material-symbols-outlined">link</span> Share or embed map
                                </p>
                                <p onClick={() => handleCategoryClick('Print')}>
                                    <span className="material-symbols-outlined">print</span> Print
                                </p>
                                <p onClick={() => handleCategoryClick('Add a missing place')}>Add a missing place</p>
                                <p onClick={() => handleCategoryClick('Add your business')}>Add your business</p>
                                <p
                                    onClick={() => handleCategoryClick('Edit the map')}
                                    className="menu-option data-in-maps"
                                >
                                    <span
                                        className="material-symbols-outlined directions-icon"
                                        title="Directions"
                                        data-tooltip="Directions"
                                    >
                                        directions
                                    </span>
                                    Edit the map
                                </p>
                                <p onClick={() => handleCategoryClick('Tips and tricks')}>Tips and tricks</p>
                                <p onClick={() => handleCategoryClick('Get help')}>Get help</p>
                                <p onClick={() => handleCategoryClick('Consumer information')}>Consumer information</p>
                                <p onClick={() => handleCategoryClick('Language')}>
                                    <span className="material-symbols-outlined">translate</span> Language
                                </p>
                                <p onClick={() => handleCategoryClick('Search settings')}>Search settings</p>
                                <p onClick={() => handleCategoryClick('Maps activity')}>Maps activity</p>
                            </div>
                        </div>
                    )}

                    <div className="category-buttons">
                        <button className="category-btn" onClick={() => handleCategoryClick('restaurants')}>🍽️ Restaurants</button>
                        <button className="category-btn" onClick={() => handleCategoryClick('hotels')}>🏨 Hotels</button>
                        <button className="category-btn" onClick={() => handleCategoryClick('things to do')}>🎉 Things to Do</button>
                        <button className="category-btn" onClick={() => handleCategoryClick('museums')}>🏛️ Museums</button>
                        <button className="category-btn" onClick={() => handleCategoryClick('transit')}>🚉 Transit</button>
                        <button className="category-btn" onClick={() => handleCategoryClick('pharmacies')}>💊 Pharmacies</button>
                        <button className="category-btn" onClick={() => handleCategoryClick('atm')}>🏧 ATMs</button>
                    </div>

                    <APIProvider apiKey={apiKey} onLoad={() => console.log('Maps API has loaded.')}>
                        <Map
                            defaultZoom={13}
                            defaultCenter={{ lat: 43.54769548589513, lng: -80.2682165264723 }}
                            onCameraChanged={(ev) =>
                                console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
                            }>
                            {locations.map((poi) => (
                                <Marker
                                onClick={poi.clickHandler}
                                    key={poi.key}
                                    position={poi.location}>
                                    <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                                </Marker>
                            ))}
                        </Map>
                    </APIProvider>
                </div>
            )}
        </div>
    );
}

export default App;
