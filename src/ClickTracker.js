import React, { useState } from 'react';

const ClickTracker = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Click Tracker</h1>
            <p>Button clicked: {count} times</p>
            <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Click Me!
            </button>
        </div>
    );
};

export default ClickTracker;

