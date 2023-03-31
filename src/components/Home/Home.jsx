import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css';

const Home = () => {
      const [authors, setAuthors] = useState([]);
    useEffect( ()=> {
      fetch("data.json")
      .then(res => res.json())
      .then(data => setAuthors(data))
    }, [])

  return (
    <div>
      {
        authors.map(author => <SingleCard author={author} key={author.id}></SingleCard>)
      }
    </div>
  );
};

export default Home;