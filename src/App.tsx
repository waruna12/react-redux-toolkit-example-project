import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './reducers/numberSlice';
import { decrement2, increment2, numberSlice2Selector } from './reducers/number2Slice';
import LaptopComponent from './components/laptopComponent';

function App() {

  const number = useSelector((store: any) => store.numberSlice);
  const number2 = useSelector(numberSlice2Selector);
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1> {number.number}</h1>
      <div>
        <p>  {number2.number}</p>
      </div>
      <button onClick={() => { dispatch(increment2(10)) }}>increment</button>
      <button onClick={() => { dispatch(decrement2(10)) }} >decrement</button>
      <br />
      <div>
        <LaptopComponent />
      </div>
    </div>
  );
}

export default App;
