import "./CertificateSlider.scss";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const CertificateSlider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="certificate-slider">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => (
        <a href={item.href} target="_blank" rel="noopener noreferrer" key={idx}>
          <img
            src={item.src}
            alt={`Certificate ${idx}`}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        </a>
      ))}
      <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
      <span className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default CertificateSlider;
