import React from 'react';
import './Question.css';

const Question = () => {
  return (
    <div className='questions card mt-5'>
        <h3>1. What is the difference between props and state?</h3>
        <p>Ans: Props are passed down from a parent component to a child component. State, on the other hand, is used to manage data within a component. Another difference is that props are immutable, while state is mutable. This means that you cannot change the value of a prop directly, but you can change the value of a state variable using the setState() method.</p>
        <br></br>
        
    </div>
  );
};

export default Question;