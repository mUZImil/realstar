import React, { useState } from 'react';
import BuyersBox from './BuyersBox';

const CarouselEffectBuyersBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { img: './junaidAbbas1.svg' },
    { img: './junaidAbbas2.svg' },
    { img: './junaidAbbas3.svg' }
  ];

  function handlePrev() {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  }

  function handleNext() {
    setCurrentIndex(prevIndex => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  }

  return (
    <div>
    <div className="carousel-container flex justify-center items-center py-12 relative">
      <button className="px-5 text-[56px] rounded-lg bg-[#ffffff8f] absolute left-0" onClick={handlePrev}>‹</button>

      <div className="carousel-wrapper">
       <BuyersBox description={'Fermentum pretium sem imperdiet augue vulputate. Semper facilisis convallis vel dolor. Metus non integer ullamcorper enim velit venenatis nisl sit. Amet lectus diam aliquam sapien.'} img={cards[currentIndex].img}/>
      </div>

      <button className="px-5 text-[56px] rounded-lg bg-[#ffffff8f] absolute right-0" onClick={handleNext}>›</button>
      </div>
      <div className='flex justify-center items-center gap-2 pb-12'>
        <div className={`h-[10px] w-[10px] rounded-full ${currentIndex===0?'bg-[#0C4C6B]':'bg-[#AFDDE5]'}`}></div>
        <div className={`h-[10px] w-[10px] rounded-full ${currentIndex===1?'bg-[blue]':'bg-[#AFDDE5]'}`}></div>
        <div className={`h-[10px] w-[10px] rounded-full ${currentIndex===2?'bg-[blue]':'bg-[#AFDDE5]'}`}></div>
      </div>
    </div>
  );
};

export default CarouselEffectBuyersBox;
