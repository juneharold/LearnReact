// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
import React from 'react';

export default function App() {
    const [price, changePrice] = React.useState("$100");
    
    return (
        <div>
            <p data-testid="price">{price}</p>
            <button onClick={() => changePrice("$75")}>Apply Discount</button>
        </div>
    );
}
