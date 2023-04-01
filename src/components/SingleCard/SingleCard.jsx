import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './SingleCard.css';
import { ToastContainer, toast } from 'react-toastify';


const SingleCard = (props) => {
  const {Author_Image,Images,title,Read_time,Publish_date,Author_name} = props.author;
  const handleAddToCart = props.handleAddToCart;
  const handleBookMark = props.handleBookMark;

  const handleToast = () =>{
    toast("Wow so easy!");
  }

  return (
    <div>
        <div className='card mt-3'>
          <div>
            <img 
            className="w-100" src={Images} alt="" />
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center gap-3 mt-3'>
              <img className='profile-img' src={Author_Image} alt="" />
              <div>
                <h5 className="author-name"> {Author_name} </h5>
                <p className='publishDate'>{Publish_date}</p>
              </div>
            </div>
            <div>
                <span onClick={handleToast}>{Read_time} min read <FontAwesomeIcon onClick={()=> handleAddToCart(props.author)} icon={faBookmark} /></span>
            </div>
          </div>
          <h4 className='title'>Title: {title} </h4>
          <p className='link' onClick={()=>handleBookMark(props.author.Read_time)} >Mark as read</p>
      </div>
    </div>
  );
};

export default SingleCard;