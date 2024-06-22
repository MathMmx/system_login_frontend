import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
        // Optional: Clear token from cookies or local storage
    };

    return (
        <div className="App">
            {!loggedIn && <Register />}
            {!loggedIn && <Login onLogin={handleLogin} />}
            {loggedIn && <Dashboard onLogout={handleLogout} />}
        </div>
    );
}

export default App;