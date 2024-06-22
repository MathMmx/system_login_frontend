import React from 'react';

function Dashboard({ onLogout }) {
    const handleLogout = () => {
        onLogout();
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome to the dashboard!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;