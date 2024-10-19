import { useState } from "react";
import "./Header.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function Header() {
  const slides = [
    {
      id: 1,
      title: "Welcome to Past",
      description: "Your trusted It consultant",
    },
    {
      id: 2,
      title: "Welcome to Present",
      description: "Your trusted It consultant",
    },
    {
      id: 3,
      title: "Welcome to future",
      description: "Your trusted It consultant",
    },
  ];

  const [slideNumber , setSlideNumber] = useState(0);

  const nextSlide = () =>{
    setSlideNumber(slideNumber === slides.length - 1 ? 0 : slideNumber + 1);
  }
  
  const prevSlide = () =>{
    setSlideNumber(slideNumber === 0 ?slides.length -1 : slideNumber - 1 );
  }

  return (
    <div id="main">
      <div className="carousel">
        <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left"/>
        {slides.map((slide , idx) => (
          <div key={idx} className={slideNumber === idx ? "carousel-slide" : "carousel-slides-hidden"}>
            <h1 key={idx + 1}>{slide.title}</h1>
            <h2 key={idx + 2}>{slide.description}</h2>
            </div>
        ))}
        <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right"/>
        <span className="indicators">
            {slides.map((_ , idx) =>(
                <button key = {idx} onClick={() => setSlideNumber(idx)} className={slideNumber === idx ? "indicator" : "indicator indicator-inactive"}></button>
            ))}
        </span>
      </div>
    </div>
  );
}

export default Header;
