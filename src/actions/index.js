// const initialState = {
//     tasks: []
//   };
  
//   const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TASK':
//         return {
//           ...state,
//           tasks: [...state.tasks, action.payload]
//         };
//       case 'DELETE_TASK':
//         return {
//           ...state,
//           tasks: state.tasks.filter(task => task.id !== action.payload)
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default rootReducer;
  
let nextTaskId = 1;

export const addTask = (text) => ({
  type: 'ADD_TASK',
  payload: {
    id: nextTaskId++,
    text
  }
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: id
});
//hhu
// ../actions/index.js

export const updateTask = (id, newText) => ({
    type: 'UPDATE_TASK',
    payload: {
      id,
      newText
    }
  });
  