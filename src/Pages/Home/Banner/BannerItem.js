import React from 'react';
import './Banner.css';


const BannerItem = ({slide}) => {
    const { image, id, prev, next, text } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carousel-img w-full">
        <img src={image} alt='img1' className="w-full rounded-xl carousel-image-width" />
        </div>
        {/* <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
            <h1 className='text-6xl font-bold text-white'>
              Affordable <br/>
              Price for Car <br/>
              Servicing
            </h1>
        </div> */}
        <div className="absolute flex justify-center transform w-full -translate-y-1/2 px-6 top-1/3">
            <p className='text-xl text-white'>{text}</p>
        </div>
        {/* <div className="absolute flex justify-start transform w-2/5 -translate-y-1/2 left-24 top-3/4">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
        </div> */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
          <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
      </div> 
    );
};

export default BannerItem;