import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppDispatch, useAppSelector, INCREMENT, DECREMENT } from './counterSlice'; // Assuming counterSlice is the name of your Redux slice


function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.value);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(INCREMENT())}>
          +
        </button>
        <div>count is {count}</div>
        <button onClick={() => dispatch (DECREMENT())}>
          -
        </button>
      </div>
    </>
  )
}

export default App
