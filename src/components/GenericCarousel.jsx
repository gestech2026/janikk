// src/components/GenericCarousel/GenericCarousel.jsx
import React, { useState, useEffect, useRef } from "react";
import styles from "./GenericCarousel.module.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// NOTE: The 'items' prop expects an array of JSX elements or components.
const GenericCarousel = ({ children, slidesToShow = 3, gap = 24 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(slidesToShow);
  const carouselRef = useRef(null);
  const totalItems = React.Children.count(children);

  // Function to calculate how many items should be visible based on screen size
  const updateItemsPerSlide = () => {
    if (!carouselRef.current) return;

    // Check breakpoints (must match your _mixins.scss definitions)
    const width = carouselRef.current.offsetWidth;

    if (width < 576) {
      // sm
      setItemsPerSlide(1);
    } else if (width < 992) {
      // lg
      setItemsPerSlide(2);
    } else {
      setItemsPerSlide(slidesToShow); // Default for desktop
    }
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, [slidesToShow]);

  const slideCount = Math.ceil(totalItems / itemsPerSlide);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slideCount - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slideCount - 1 : prevIndex - 1
    );
  };

  // Calculate the percentage to transform the track
  // (100% / itemsPerSlide) * currentIndex
  const transformValue = (currentIndex * 100) / slideCount;

  const trackStyle = {
    transform: `translateX(-${transformValue}%)`,
    gap: `${gap}px`, // Apply the gap/spacing between items
    // Dynamic width to accommodate all groups of slides
    width: `${(totalItems / itemsPerSlide) * 100}%`,
  };

  return (
    <div className={styles.carouselWrapper} ref={carouselRef}>
      <div className={styles.carouselContainer}>
        {/* The Track that holds all items */}
        <div className={styles.carouselTrack} style={trackStyle}>
          {React.Children.map(children, (child) => (
            // Each item is sized dynamically based on the number of items per slide
            <div
              className={styles.carouselItem}
              style={{ width: `calc(100% / ${totalItems} - ${gap}px)` }} // Adjust width calculation
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows (Optional but recommended) */}
      <button
        className={`${styles.arrow} ${styles.prev}`}
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>
      <button
        className={`${styles.arrow} ${styles.next}`}
        onClick={goToNext}
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      {/* Dot Navigation */}
      <div className={styles.dotNavigation}>
        {Array(slideCount)
          .fill(0)
          .map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
      </div>
    </div>
  );
};

export default GenericCarousel;
