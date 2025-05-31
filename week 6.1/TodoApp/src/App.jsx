import { useState } from 'react'
import './App.css'
import { AddNewTodo } from '../component/AddNewTodo';
import { Todos } from '../component/Todos';
import { useEffect } from 'react';

function App() {
  
  return (
    <div>
      <AddNewTodo></AddNewTodo>
      <Todos></Todos>
    </div>
  )
};

export default App
