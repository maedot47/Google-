import React, { useState } from "react";
import "./App.css";

function App() {
  const [teamSize, setTeamSize] = useState(null);
  const [showTeamOptions, setShowTeamOptions] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showChat, setShowChat] = useState(false); // New state to control chat view

  // Profile data for both screens
  const profiles = [
    { id: 1, name: "Alice", avatar: "avatar1.png" },
    { id: 2, name: "Bob", avatar: "avatar2.png" },
    { id: 3, name: "Charlie", avatar: "avatar3.png" },
    { id: 4, name: "David", avatar: "avatar4.png" },
    { id: 5, name: "Eve", avatar: "avatar5.png" },
    { id: 6, name: "Frank", avatar: "avatar6.png" },
    { id: 7, name: "Grace", avatar: "avatar7.png" },
    { id: 8, name: "Hannah", avatar: "avatar8.png" },
    { id: 9, name: "Ivy", avatar: "avatar9.png" },
    { id: 10, name: "Jack", avatar: "avatar10.png" },
    { id: 11, name: "Kenny", avatar: "avatar11.png" },
    { id: 12, name: "Liam", avatar: "avatar12.png" },
  ];

  // Function to generate random team profiles based on the team size selected
  const generateTeam = (size) => {
    const shuffledProfiles = [...profiles].sort(() => 0.5 - Math.random());
    return shuffledProfiles.slice(0, size);
  };

  // Handle team size selection
  const handleTeamSelect = (size) => {
    setSelectedTeam(generateTeam(size));
    setShowTeamOptions(false); // Hide team options after selection
  };

  const handleRectangleClick = () => {
    setShowTeamOptions(true); // Show team size options
  };

  // Function to reset back to the initial screen
  const handleNextClick = () => {
    setShowChat(true); // Show the chat screen
    setSelectedTeam(null);
    setShowTeamOptions(false); // Reset to first screen
  };

  return (
    <div className="container">
      <header>
        <div className="header-left">
          <span className="username">BigBob</span>
        </div>
        <div className="header-right">
          <span className="app-title">VolleyVibe</span>
        </div>
      </header>

      <main>
        <div className="sidebar">
          <div className="group-search">
            <input type="text" placeholder="Group Name" className="search-input" />
          </div>

          {/* Group Item Rectangle with Avatar and +1 BobGang */}
          <div className="group-item" onClick={handleRectangleClick}>
            <div className="group-avatar-text">
              <div className="group-avatar">
                <img src="avatar1.png" alt="Avatar 1" />
                <img src="avatar2.png" alt="Avatar 2" />
              </div>
              <span className="group-name">+1 BobGang</span>
            </div>
          </div>

          {/* Plus Icon */}
          <div className="find-more-button">
            <span className="plus-icon">+</span>
          </div>
        </div>

        <div className="main-content">
          {showTeamOptions ? (
            // Show team selection (2v2, 4v4, 6v6)
            <div className="team-options">
              <div className="team-option" onClick={() => handleTeamSelect(4)}>2v2</div>
              <div className="team-option" onClick={() => handleTeamSelect(8)}>4v4</div>
              <div className="team-option" onClick={() => handleTeamSelect(12)}>6v6</div>
            </div>
          ) : selectedTeam ? (
            // Show the selected team (random names and avatars)
            <div className="team-members">
              <div className="team-member-grid">
                {selectedTeam.map((member) => (
                  <div key={member.id} className="team-member">
                    <div className="avatar">
                      <img src={member.avatar} alt={member.name} />
                    </div>
                    <span className="name">{member.name}</span>
                  </div>
                ))}
              </div>
              {/* Next button */}
              <div className="next-button-container">
                <button className="next-button" onClick={handleNextClick}>Next</button>
              </div>
            </div>
          ) : showChat ? (
            // Show chat screen with message "What's up guys"
            <div className="chat-screen">
              <div className="chat-message">
                <span>What's up guys, which court should we book?</span>
              </div>
            </div>
          ) : (
            // Show initial content on the first screen
            <div className="initial-screen">
              <span>Welcome to VolleyVibe</span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
