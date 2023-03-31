import React, { useEffect, useState } from 'react';
import Question from '../Question/Question';
import Sidebar from '../SideBar/Sidebar';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css';

const Home = () => {
    const [authors, setAuthors] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( ()=> {
      fetch("data.json")
      .then(res => res.json())
      .then(data => setAuthors(data))
    }, []);

    const handleAddToCart=(author)=>{
      const newCart = [...cart, author];
      setCart(newCart);
    }

  return (
    <>
      <div className='row'>
      <div className='col-md-8'>
        {
          authors.map(author => <SingleCard 
            author={author}
            key={author.id}
            handleAddToCart={handleAddToCart}
            ></SingleCard>)
        }
      </div>
      <div className='col-md-4'>
        {/* <Sidebar cart={cart}></Sidebar> */}
        <h4 className='card'>Spent time on read : 0 min</h4>
        <div className='card'>
            <h4 className='bookMark'>Bookmarked Blogs: {cart.length} </h4>
            {
              cart.map(SingleCard=> <p className='single-title'>{SingleCard.title}</p>)
            }
        </div>
      </div>
    </div>
    <Question></Question>
    </>
  );
};

export default Home;