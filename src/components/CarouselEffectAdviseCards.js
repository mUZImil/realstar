import React, { useState } from 'react';
import AdviceCards from './AdviceCards';

const CarouselEffectAdviseCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { title: 'RealStar AI: buy and sell homes commission free', date: 'Aug 17, 2024', name: 'By Ankit Dhawan', image: './realstarImage1.svg' },
    { title: 'A Step By Step Guide To Selling Your First Home: Part 1', date: 'Aug 19, 2024', name: 'By Omar Hashmy', image: './realstarImage2.svg' },
    { title: 'How AI is Transforming the Real Estate Industry...', date: 'Aug 23, 2024', name: 'By Nick Ng', image: './realstarImage3.svg' }
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

      <div className="">
        <AdviceCards title={cards[currentIndex].title} date={cards[currentIndex].date} name={cards[currentIndex].name} image={cards[currentIndex].image} />
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

export default CarouselEffectAdviseCards;
