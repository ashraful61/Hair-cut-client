import React from 'react';
import './Banner.css'
import BannerItem from './BannerItem';

const Banner = () => {

  const bannerData = [
    {
      image: "https://st4.depositphotos.com/13193658/23132/i/600/depositphotos_231321354-stock-photo-close-partial-view-hairstylist-combing.jpg",
      prev: 5,
      id: 1,
      next: 2,
      text:"Barber trimming customers beard"
    },
    {
      image: "https://st2.depositphotos.com/4554625/10675/i/600/depositphotos_106751568-stock-photo-beautiful-woman-getting-haircut-by.jpg",
      prev: 1,
      id: 2,
      next: 3,
      text:"Young female hairdresser combing hair to handsome male client in beauty salon"
    },
    {
      image: "https://st3.depositphotos.com/12039320/16154/i/600/depositphotos_161543046-stock-photo-barber-trimming-customers-beard.jpg",
      prev: 2,
      id: 3,
      next: 4,
      text:"Beautiful woman getting haircut by hairdresser"
    },
    {
      image: "https://st2.depositphotos.com/1372245/10707/i/600/depositphotos_107074430-stock-photo-young-man-at-the-hairdresser.jpg",
      prev: 3,
      id: 4,
      next: 5,
      text:"Beautiful woman getting haircut by hairdresser in the beauty salon"
    },
    {
      image: "https://st2.depositphotos.com/1116619/8730/i/600/depositphotos_87308596-stock-photo-toddler-child-getting-his-first.jpg",
      prev: 4,
      id: 5,
      next: 1,
      text:"Hairdresser showing his work through the mirror"
    },
  ]
    return (
        <div className="carousel w-full py-10">
        {
          bannerData.map(slide => <BannerItem key={slide.id} slide={slide}></BannerItem>)
        }
      </div>
    );
};

export default Banner;