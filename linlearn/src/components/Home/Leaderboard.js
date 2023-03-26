import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../Styles/Leaderboard.css";

function Leaderboard() {
  const [topFive, setTopFive] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:8000/api/leaderboard/')
      .then(response => {
        // Sort the data by endTime in descending order and get the top 5 entries
        const sortedData = response.data.sort((a, b) => b.endTime - a.endTime).slice(0, 5);
        setTopFive(sortedData);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="Leaderboard">
      <h2>Top 5 Players</h2>
      <ul>
        {topFive.map((entry, index) => (
          <li key={index}>
            <span className="username">{entry.username}</span>
            <span className="time">{entry.endTime}s</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;