import React from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import TaskInput from './components/TaskInput';
// import AddTaskForm from './components/AddTaskForm';
// import TaskList from './components/TaskList';

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTaskForm />
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;

