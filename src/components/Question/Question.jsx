import React from 'react';
import './Question.css';

const Question = () => {
  return (
    <div className='questions card mt-5'>
        <h3>1. What is the difference between props and state?</h3>
        <p>Ans: Props are passed down from a parent component to a child component. State, on the other hand, is used to manage data within a component. Another difference is that props are immutable, while state is mutable. This means that you cannot change the value of a prop directly, but you can change the value of a state variable using the setState() method.</p>
        <br></br>
        <h3>2. How does UseState work?</h3>
        <br></br>
        <p>Ans: UseState can be used multiple times within a component to manage multiple state variables. useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
        <br></br>
        <h3>3. What else does useEffect do except load data?</h3>
        <p>Ans: The useEffect hook is a built-in React hook that allows functional components to perform side effects, such as data fetching, DOM manipulation, and event handling.</p>
        <br></br>
        <h3>4. How does react work?</h3>
        <p>Ans: React provides a simple and efficient way to build complex UIs by breaking them down into reusable components, managing state and props, and optimizing the rendering process using the virtual DOM.</p>
    </div>
  );
};

export default Question;