import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// React.useState(...)

// don't change the Component name "App"
export default function App() {
    const [state, changeState] = React.useState(0)
    return (
      <div>
        {state === 0 ? (<button onClick={() => changeState(1)}>Delete</button>)
            :
            (<div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={() => changeState(0)}>Proceed</button>
        </div>)
        }
      </div>    
    );
}