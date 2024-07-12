// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from '../actions';

// const TaskInput = () => {
//   const [taskText, setTaskText] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (taskText.trim() === '') return;
//     dispatch(addTask(taskText));
//     setTaskText('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={taskText}
//         onChange={(e) => setTaskText(e.target.value)}
//         placeholder="Add a new task"
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default TaskInput;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';
import './TaskInput.css'; // Import CSS file

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    dispatch(addTask(taskText));
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
