import React from 'react';
import './SingleCard.css';

const SingleCard = (props) => {
  console.log(props)
  const {name, url, profile_pic, date, id} = props.author;
  return (
    <div>
        <div>
          <div>
            <img 
            className="w-100" src={url} alt="" />
          </div>
          <div className='d-flex align-items-center gap-3 mt-3'>
            <img className='profile-img' src={profile_pic} alt="" />
            <div>
              <h5 className=''> {name} </h5>
              <p>{date} </p>
            </div>
          </div>
          <h3>Title: {id} </h3>
          <p>des: </p>
          <p><a href="">Mark as read</a></p>
      </div>
    </div>
  );
};

export default SingleCard;