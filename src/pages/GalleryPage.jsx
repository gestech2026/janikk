import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/GalleryHero.module.scss";
import ImageModal from "../components/ImageModal";
import HeroImg from "../assets/images/Gallary/GallaryHero.png";
import img1_jpg from "../assets/images/Gallary/img (1).JPG";
import img1_jpeg from "../assets/images/Gallary/img (1).jpeg";
import img2_jpg from "../assets/images/Gallary/img (2).jpg";
import img2_jpeg from "../assets/images/Gallary/img (2).jpeg";
import img3_jpg from "../assets/images/Gallary/img (3).jpg";
import img3_jpeg from "../assets/images/Gallary/img (3).jpeg";
import img4_jpg from "../assets/images/Gallary/img (4).jpg";
import img4_jpeg from "../assets/images/Gallary/img (4).jpeg";
import img5_jpg from "../assets/images/Gallary/img (5).jpg";
import img5_jpeg from "../assets/images/Gallary/img (5).jpeg";
import img6_JPG from "../assets/images/Gallary/img (6).JPG";
import img6_jpeg from "../assets/images/Gallary/img (6).jpeg";
import img7_JPG from "../assets/images/Gallary/img (7).JPG";
import img7_jpeg from "../assets/images/Gallary/img (7).jpeg";
import img8_JPG from "../assets/images/Gallary/img (8).JPG";
import img8_jpeg from "../assets/images/Gallary/img (8).jpeg";
import img9_JPG from "../assets/images/Gallary/img (9).JPG";
import img9_jpeg from "../assets/images/Gallary/img (9).jpeg";
import img10_jpg from "../assets/images/Gallary/img (10).jpg";
import img10_jpeg from "../assets/images/Gallary/img (10).jpeg";
import img11_jpg from "../assets/images/Gallary/img (11).jpg";
import img11_jpeg from "../assets/images/Gallary/img (11).jpeg";
import img12_jpg from "../assets/images/Gallary/img (12).jpg";
import img12_jpeg from "../assets/images/Gallary/img (12).jpeg";
import img13_jpg from "../assets/images/Gallary/img (13).jpg";
import img13_jpeg from "../assets/images/Gallary/img (13).jpeg";
import img14_jpg from "../assets/images/Gallary/img (14).jpg";
import img15_jpg from "../assets/images/Gallary/img (15).jpg";
import img16_jpg from "../assets/images/Gallary/img (16).jpg";
import img17_jpg from "../assets/images/Gallary/img (17).jpg";
import img18_jpg from "../assets/images/Gallary/img (18).jpg";
import img19_jpg from "../assets/images/Gallary/img (19).jpg";
import img20_jpg from "../assets/images/Gallary/img (20).jpg";
import img21_jpg from "../assets/images/Gallary/img (21).jpg";
import img22_jpg from "../assets/images/Gallary/img (22).jpg";
import img23_jpg from "../assets/images/Gallary/img (23).jpg";
import img24_jpg from "../assets/images/Gallary/img (24).jpg";
import img25_jpg from "../assets/images/Gallary/img (25).jpg";
import img26_jpg from "../assets/images/Gallary/img (26).jpg";
import img27_jpg from "../assets/images/Gallary/img (27).jpg";
import img28_jpg from "../assets/images/Gallary/img (28).jpg";
import img29_jpg from "../assets/images/Gallary/img (29).jpg";

const IMAGES_PER_BATCH = 12;
const GalleryHero = () => {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const IMAGES_PER_BATCH = 12;
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_BATCH);
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    img1_jpg,
    img1_jpeg,
    img2_jpg,
    img2_jpeg,
    img3_jpg,
    img3_jpeg,
    img4_jpg,
    img4_jpeg,
    img5_jpg,
    img5_jpeg,
    img6_JPG,
    img6_jpeg,
    img7_JPG,
    img7_jpeg,
    img8_JPG,
    img8_jpeg,
    img9_JPG,
    img9_jpeg,
    img10_jpg,
    img10_jpeg,
    img11_jpg,
    img11_jpeg,
    img12_jpg,
    img12_jpeg,
    img13_jpg,
    img13_jpeg,
    img14_jpg,
    img15_jpg,
    img16_jpg,
    img17_jpg,
    img18_jpg,
    img19_jpg,
    img20_jpg,
    img21_jpg,
    img22_jpg,
    img23_jpg,
    img24_jpg,
    img25_jpg,
    img26_jpg,
    img27_jpg,
    img28_jpg,
    img29_jpg,
    HeroImg,
  ];
  const visibleImages = images.slice(0, visibleCount);
  return (
    <div className={styles.galleryPage}>
      <section
        ref={heroRef}
        className={`${styles.hero} ${visible ? styles.visible : ""}`}
      >
        <div className={styles.container}>
          {/* Left Content */}
          <div className={styles.content}>
            <span className={styles.badge}>Gallery</span>
            <h1>Moments from Our Global Education Journey</h1>
            <p>
              Explore memorable highlights from our international education
              summits, partnerships, and student engagements.
            </p>
          </div>

          {/* Right Image */}
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <img src={HeroImg} alt="Gallery Hero" loading="eager" />
            </div>
          </div>
        </div>
      </section>{" "}
      <section className={styles.gallerySection}>
        <div className={styles.grid}>
          {visibleImages.map((src, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                loading="lazy"
                onLoad={(e) => e.currentTarget.classList.add(styles.loaded)}
              />
            </div>
          ))}
        </div>

        {visibleCount < images.length && (
          <div className={styles.loadMore}>
            <button
              onClick={() => setVisibleCount((v) => v + IMAGES_PER_BATCH)}
            >
              Load More
            </button>
          </div>
        )}
      </section>
      {/* Fullscreen Viewer */}
      {activeIndex !== null && (
        <ImageModal
          images={images}
          index={activeIndex}
          setIndex={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </div>
  );
};

export default GalleryHero;
