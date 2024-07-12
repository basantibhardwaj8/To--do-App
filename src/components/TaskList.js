// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteTask } from '../actions';

// const TaskList = () => {
//   const tasks = useSelector(state => state.tasks);
//   const dispatch = useDispatch();

//   const handleDelete = (id) => {
//     dispatch(deleteTask(id));
//   };

//   return (
//     <ul>
//       {tasks.map(task => (
//         <li key={task.id}>
//           {task.text}
//           <button onClick={() => handleDelete(task.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TaskList;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteTask } from '../actions';

// const TaskList = () => {
//   const tasks = useSelector(state => state.tasks);
//   const dispatch = useDispatch();

//   const handleDelete = (id) => {
//     dispatch(deleteTask(id));
//   };

//   return (
//     <div>
//       <h2>Tasks</h2>
//       {tasks.length === 0 ? (
//         <p>No tasks added yet. Add a task above.</p>
//       ) : (
//         <ul>
//           {tasks.map(task => (
//             <li key={task.id}>
//               {task.text}
//               <button onClick={() => handleDelete(task.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TaskList;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteTask } from '../actions';

// const TaskList = () => {
//   const tasks = useSelector(state => state.tasks);
//   const dispatch = useDispatch();

//   const handleDelete = (id) => {
//     dispatch(deleteTask(id));
//   };

//   return (
//     <div>
//       <h2>Tasks</h2>
//       {tasks.length === 0 ? (
//         <p>No tasks added yet. Add a task above.</p>
//       ) : (
//         <ul>
//           {tasks.map(task => (
//             <li key={task.id}>
//               {task.text}
//               <button onClick={() => handleDelete(task.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TaskList;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id, newText) => {
    dispatch(updateTask(id, newText));
  };

  // State to manage which task is being edited
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleOpenEdit = (id, text) => {
    setEditTaskId(id);
    setEditedText(text);
  };

  const handleCloseEdit = () => {
    setEditTaskId(null);
    setEditedText('');
  };

  const handleSaveEdit = () => {
    dispatch(updateTask(editTaskId, editedText));
    setEditTaskId(null);
    setEditedText('');
  };

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks added yet. Add a task above.</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {editTaskId === task.id ? (
                <div>
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                  <button onClick={handleSaveEdit}>Save</button>
                  <button onClick={handleCloseEdit}>Cancel</button>
                </div>
              ) : (
                <div>
                  {task.text}
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                  <button onClick={() => handleOpenEdit(task.id, task.text)}>Edit</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
