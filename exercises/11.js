import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [state, stateChange] = React.useState(undefined);
    function handleClick() {
        stateChange("active")
    }
    return (
        <div>
            <p className={state}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}
