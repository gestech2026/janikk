import React, { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./ImageCarousel.module.scss";
import ImageModal from "./ImageModal";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const ImageCarousel = ({ images, text }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [activeIndex, setActiveIndex] = useState(null);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>{text}</h2>

          <div className={styles.arrows}>
            <button onClick={scrollPrev}>
              <IoArrowBack />
            </button>
            <button onClick={scrollNext}>
              <IoArrowForward />
            </button>
          </div>
        </div>

        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.container}>
            {images.map((src, index) => (
              <div
                className={styles.slide}
                key={index}
                onClick={() => setActiveIndex(index)}
              >
                <img src={src} alt={`mockup-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeIndex !== null && (
        <ImageModal
          images={images}
          index={activeIndex}
          setIndex={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
};

export default ImageCarousel;
