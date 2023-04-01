import React, { useEffect, useState } from 'react';
import Question from '../Question/Question';
import Sidebar from '../SideBar/Sidebar';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';


const Home = () => {

    const [authors, setAuthors] = useState([]);
    const [cart, setCart] = useState([]);
    const [readTime, setReadTime] = useState(0);

    useEffect( ()=> {
      fetch("data.json")
      .then(res => res.json())
      .then(data => setAuthors(data))
    }, []);

    const handleAddToCart=(author)=>{
      const newCart = [...cart, author];
      setCart(newCart);
    }

    const handleBookMark = (time) =>{
      const newReadTime = readTime + parseInt(time);
      setReadTime(newReadTime);
    }

    const handleToast = () =>{
      toast("Wow so easy!");
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
            handleBookMark = {handleBookMark}
            handleToast = {handleToast}
            ></SingleCard>)
        }
      </div>
      <div className='col-md-4 mt-3'>
        <h4 className='card'>Spent time on read : {readTime} min</h4>
        <div className='card'>
            <h4 className='bookMark'>Bookmarked Blogs: {cart.length} </h4>
            {
              cart.map((SingleCard, index)=> <p key={index} className='single-title'>{SingleCard.title}</p>)
            }
            
        </div>
      </div>
    </div>
    <Question></Question>
    </>
  );
};

export default Home;