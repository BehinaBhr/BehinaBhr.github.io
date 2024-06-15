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
      <BsArrowLeftCircleFill onClick={prevSlide} className="certificate-slider__arrow certificate-slider__arrow-left" />
      {data.map((item, idx) => (
        <a href={item.href} target="_blank" rel="noopener noreferrer" key={idx}>
          <img
            src={item.src}
            alt={`Certificate ${idx}`}
            className={slide === idx ? "certificate-slider__slide" : "certificate-slider__slide certificate-slider__slide-hidden"}
          />
        </a>
      ))}
      <BsArrowRightCircleFill onClick={nextSlide} className="certificate-slider__arrow certificate-slider__arrow-right" />
      <span className="certificate-slider__indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={slide === idx ? "certificate-slider__indicator" : "certificate-slider__indicator certificate-slider__indicator-inactive"}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default CertificateSlider;
