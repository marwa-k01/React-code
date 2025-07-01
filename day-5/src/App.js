import './App.css'
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className='bg-slate-600 w-96 h-64 p-20 text-white text-center rounded-xl shadow-2xl mt-20'  >
            
            <h1 className='text-2xl'>Counter: {count}</h1>
            <button onClick={increment} className='px-3.5 pt-0.5 m-4 pb-1.5 text-xl rounded-xl bg-white text-slate-600'>
                +
            </button>
            <button onClick={decrement} className='px-4 m-4 pb-1 text-2xl rounded-xl bg-white text-slate-600'>
                -
            </button>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Counter />
        </div>
    );
};

export default App;