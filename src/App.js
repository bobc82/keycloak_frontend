import React from 'react';

function App({ keycloak }) {
  const username = keycloak.tokenParsed?.preferred_username;

  const callApi = () => {
    fetch('http://localhost:8000/api/protected/', {
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
      },
    })
      .then(res => res.json())
      .then(data => alert(JSON.stringify(data)))
      .catch(err => alert('Errore: ' + err.message));
  };

  return (
    <div>
      <h1>Benvenuto, {username}</h1>
      <button onClick={callApi}>Chiama API</button>
    </div>
  );
}

export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
