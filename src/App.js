import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (birthDate) {
      const dob = new Date(birthDate);
      const today = new Date();
      const ageInMilliseconds = today - dob;
      const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
      setAge(ageInYears);
    }
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <div>
        <h4>Enter your date of birth </h4>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && (
        <h2>You are {age} years old</h2>
      )}
    </div>
  );
}

export default App;
