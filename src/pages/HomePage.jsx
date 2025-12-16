import React, { useState, useEffect, useCallback } from "react";
import img1 from "../assets/images/LandingPageHero.png";
import styles from "./styles/HomePage.module.scss";
import mainAboutImage from "../assets/images/LandingPageAbout.jpg";
import lowerAboutImage from "../assets/images/LandingPageAbout2.png";
import immersionImage from "../assets/images/LandingPageImersion.png";
// You will need to install react-icons for the lightbulb and gear icons
// npm install react-icons
import { GiLightBulb } from "react-icons/gi"; // For Mission
import { FaCog } from "react-icons/fa"; // For Vision
import GenericCarousel from "../components/GenericCarousel";
const slides = [
  {
    id: 1,
    imageUrl: img1,
    title: "Innovative Learning",
    caption: "Driving technological advancement in every curriculum.",
  },
  {
    id: 2,
    imageUrl: img1,
    title: "Empowering Future Leaders",
    caption: "Building confidence and global perspective for success.",
  },
  {
    id: 3,
    imageUrl: img1,
    title: "Immersion Programme Excellence",
    caption: "Hands-on cultural and academic experiences worldwide.",
  },
];
export default function HomePage() {
  const autoSlideInterval = 5000; // 5 seconds
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  // Function to handle automatic sliding
  useEffect(() => {
    if (autoSlideInterval > 0) {
      const interval = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [nextSlide, autoSlideInterval]);

  // Function to move to a specific slide (used by dots)
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Calculate the CSS transform value
  const sliderStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };
  return (
    <div className={styles.HomePage}>
      <div className={styles.heroSection}>
        <div className={styles.carouselContainer}>
          {/* The Slider Track */}
          <div className={styles.sliderTrack} style={sliderStyle}>
            {slides.map((slide, index) => (
              <div key={slide.id} className={styles.slide}>
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className={styles.slideImage}
                  loading="eager" // Important for the main hero image
                />
                {/* <div className={styles.overlay}>
                <h2 className={styles.title}>{slide.title}</h2>
                <p className={styles.caption}>{slide.caption}</p>
              </div> */}
              </div>
            ))}
          </div>
        </div>

        {/* Dot Navigation */}
        <div className={styles.dotNavigation}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Optional: Navigation Arrows (for completeness) */}
        {/* <button 
        className={`${styles.arrow} ${styles.prev}`} 
        onClick={() => goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)}
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button 
        className={`${styles.arrow} ${styles.next}`} 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &#10095;
      </button> */}
      </div>

      {/* hero sec end */}

      <section className={styles.abtSection}>
        <div className={styles.contentColumn}>
          <h1 className={styles.heading}>About Us</h1>
          <p className={styles.description}>
            Janikk International School is a private, progressive, innovative,
            child centered, co-educational English medium school, committed to
            providing quality education to all the students. The school offers
            Pre-primary, Primary and Secondary Education and follows the CBSE
            curriculum. The school strives to provide high quality education
            programs with an emphasis on creating learning environments that are
            innovative and enriching. Janikk International School aims at
            providing Global Education with Holistic Development at affordable
            fees.
          </p>
          <button className={styles.knowMoreButton}>Know More</button>
        </div>
        <div className={styles.imageColumn}>
          <img
            src={mainAboutImage}
            alt="Students collaborating and studying"
            className={styles.mainImage}
          />
        </div>
      </section>

      <section className={styles.bottomSection}>
        <div className={styles.imageColumn}>
          <img
            src={lowerAboutImage}
            alt="Students sitting outdoors studying"
            className={styles.lowerImage}
          />
        </div>

        <div className={styles.textColumn}>
          {/* Mission Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <GiLightBulb className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Mission</h2>
            </div>
            <p className={styles.cardContent}>
              Our mission is to nurture responsible global citizens with strong
              values, creativity, and a lifelong love for learning. We provide
              holistic education through a comprehensive curriculum and a
              dedicated faculty. By fostering integrity, compassion, and
              innovation, we prepare every child to excel academically,
              personally, and socially in a changing world.
            </p>
          </div>

          {/* Vision Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <FaCog className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Vision</h2>
            </div>
            <p className={styles.cardContent}>
              We aim to inspire and empower students through quality education
              that nurtures curiosity, creativity, and confidence. Our vision is
              to create a vibrant learning environment where individuality is
              respected and innovation is encouraged. By guiding children on a
              path of discovery, we prepare them to become leaders and
              changemakers who contribute positively to society.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.immersionPage}>
        <section className={styles.heroSection}>
          {/* Top Text & CTA Column */}
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>Immersion Programme</h1>
            <div>
              {" "}
              <p className={styles.description}>
                Leisure Tourism manages the best of destinations - partnered
                with a wide range of industries and educational institutions -
                thus offering tailor-made itineraries and industrial tours that
                deliver precise content to students of specific specialization.
                Our destinations, industries, universities are all hand-picked
                to ensure that the students have ample insight, learning
                opportunities and experience immense value from their overall
                tour.
              </p>
              <button className={styles.knowMoreButton}>Know More</button>
            </div>
          </div>

          {/* Featured Image Column */}
          <div className={styles.imageContainer}>
            <img
              src={immersionImage}
              alt="Smiling students from the Immersion Programme"
              className={styles.featuredImage}
            />
          </div>
        </section>
      </div>
      <GenericCarousel>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
      </GenericCarousel>
    </div>
  );
}
