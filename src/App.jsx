/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './slices/counterSlice';
import './App.css';

const App = () => {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <div className="child-container">
          <div className="title-section">
            <h1>Count: {count}</h1>
          </div>
          <div className="btnAction">
            <button onClick={() => { dispatch(increment()) }}>Increment</button>
            <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
            <button onClick={() => { dispatch(reset()) }}>Reset Values</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App