import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  return (
    <div className='p-8 max-w-[400px] rounded-xl shadow-2xl h-auto font-serif m-auto bg-[#fff] text-center mt-20'>
      <h1 className='text-3xl my-4'>Task List</h1>
      <input 
        type="text" 
        value={taskInput} 
        onChange={(e) => setTaskInput(e.target.value)} 
        placeholder="Add a new task"
        className='px-3 py-2 outline-none w-full my-3 border-b-2 border-slate-400 '
      />
      <button onClick={addTask} className='bg-[#3df1e2] w-full p-2.5 rounded-lg text-white'>
        Add Task
      </button>
      <ul className='list-none p-2 capitalize'>
        {tasks.map((task, index) => (
          <li key={index} className='py-1'>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App;
