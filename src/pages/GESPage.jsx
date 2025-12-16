import React from "react";
import video from "../assets/images/GES.mp4";
import styles from "./styles/GESPage.module.scss";
import Count from "./Count";
import SubNavbar from "./SubNavbar.jsx";
import intro from "../assets/images/intro.svg";
import Highlight from "../assets/images/GES/Highlights.svg";
import map from "../assets/images/Map.svg";
import map2 from "../assets/images/Map2.svg";
import { Link } from "react-router-dom";
import { FiPhone, FiMail } from "react-icons/fi";

import BackIllustration from "../assets/images/GES/GESIntroBack.svg";
import IntroImg from "../assets/images/GES/IntroImg.svg";
import page from "../assets/images/GES/page.svg";
import ImageCarousel from "../components/ImageCarousel.jsx";
import img1 from "../assets/images/GES/DesignImg1.png";
import img2 from "../assets/images/GES/DesignImg2.png";
import img3 from "../assets/images/GES/DesignImg3.png";
import img4 from "../assets/images/GES/DesignImg4.jpg";
import fee from "../assets/images/GES/fee.webp";
export default function GESPage() {
  const images = [img1, img2, img3, img4];
  return (
    <div className={styles.GESPage}>
      <div className={styles.heroSection}>
        <div className={styles.darkOverlay}>
          <div className={styles.detailsCard}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <path
                    d="M2.83398 17C2.83398 11.6578 2.83398 8.98594 4.49432 7.32702C6.15465 5.6681 8.82507 5.66669 14.1673 5.66669H19.834C25.1762 5.66669 27.8481 5.66669 29.507 7.32702C31.1659 8.98735 31.1673 11.6578 31.1673 17V19.8334C31.1673 25.1756 31.1673 27.8474 29.507 29.5064C27.8467 31.1653 25.1762 31.1667 19.834 31.1667H14.1673C8.82507 31.1667 6.15324 31.1667 4.49432 29.5064C2.8354 27.846 2.83398 25.1756 2.83398 19.8334V17Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M9.91797 5.66669V3.54169M24.0846 5.66669V3.54169M3.54297 12.75H30.4596"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M25.5 24.0833C25.5 24.4591 25.3507 24.8194 25.0851 25.0851C24.8194 25.3507 24.4591 25.5 24.0833 25.5C23.7076 25.5 23.3473 25.3507 23.0816 25.0851C22.8159 24.8194 22.6667 24.4591 22.6667 24.0833C22.6667 23.7076 22.8159 23.3473 23.0816 23.0816C23.3473 22.8159 23.7076 22.6667 24.0833 22.6667C24.4591 22.6667 24.8194 22.8159 25.0851 23.0816C25.3507 23.3473 25.5 23.7076 25.5 24.0833ZM25.5 18.4167C25.5 18.7924 25.3507 19.1527 25.0851 19.4184C24.8194 19.6841 24.4591 19.8333 24.0833 19.8333C23.7076 19.8333 23.3473 19.6841 23.0816 19.4184C22.8159 19.1527 22.6667 18.7924 22.6667 18.4167C22.6667 18.0409 22.8159 17.6806 23.0816 17.4149C23.3473 17.1493 23.7076 17 24.0833 17C24.4591 17 24.8194 17.1493 25.0851 17.4149C25.3507 17.6806 25.5 18.0409 25.5 18.4167ZM18.4167 24.0833C18.4167 24.4591 18.2674 24.8194 18.0017 25.0851C17.7361 25.3507 17.3757 25.5 17 25.5C16.6243 25.5 16.2639 25.3507 15.9983 25.0851C15.7326 24.8194 15.5833 24.4591 15.5833 24.0833C15.5833 23.7076 15.7326 23.3473 15.9983 23.0816C16.2639 22.8159 16.6243 22.6667 17 22.6667C17.3757 22.6667 17.7361 22.8159 18.0017 23.0816C18.2674 23.3473 18.4167 23.7076 18.4167 24.0833ZM18.4167 18.4167C18.4167 18.7924 18.2674 19.1527 18.0017 19.4184C17.7361 19.6841 17.3757 19.8333 17 19.8333C16.6243 19.8333 16.2639 19.6841 15.9983 19.4184C15.7326 19.1527 15.5833 18.7924 15.5833 18.4167C15.5833 18.0409 15.7326 17.6806 15.9983 17.4149C16.2639 17.1493 16.6243 17 17 17C17.3757 17 17.7361 17.1493 18.0017 17.4149C18.2674 17.6806 18.4167 18.0409 18.4167 18.4167ZM11.3333 24.0833C11.3333 24.4591 11.1841 24.8194 10.9184 25.0851C10.6527 25.3507 10.2924 25.5 9.91667 25.5C9.54094 25.5 9.18061 25.3507 8.91493 25.0851C8.64926 24.8194 8.5 24.4591 8.5 24.0833C8.5 23.7076 8.64926 23.3473 8.91493 23.0816C9.18061 22.8159 9.54094 22.6667 9.91667 22.6667C10.2924 22.6667 10.6527 22.8159 10.9184 23.0816C11.1841 23.3473 11.3333 23.7076 11.3333 24.0833ZM11.3333 18.4167C11.3333 18.7924 11.1841 19.1527 10.9184 19.4184C10.6527 19.6841 10.2924 19.8333 9.91667 19.8333C9.54094 19.8333 9.18061 19.6841 8.91493 19.4184C8.64926 19.1527 8.5 18.7924 8.5 18.4167C8.5 18.0409 8.64926 17.6806 8.91493 17.4149C9.18061 17.1493 9.54094 17 9.91667 17C10.2924 17 10.6527 17.1493 10.9184 17.4149C11.1841 17.6806 11.3333 18.0409 11.3333 18.4167Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className={styles.text}>
                <p>Date</p>
                <h5>13th-15th March 2026</h5>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <path
                    d="M16.4952 19.2262C15.3944 19.2262 14.3184 18.8998 13.4032 18.2882C12.4879 17.6767 11.7746 16.8075 11.3533 15.7905C10.9321 14.7736 10.8219 13.6545 11.0366 12.5749C11.2514 11.4953 11.7814 10.5037 12.5598 9.72531C13.3381 8.94696 14.3298 8.4169 15.4094 8.20216C16.489 7.98741 17.608 8.09763 18.625 8.51886C19.6419 8.9401 20.5111 9.65344 21.1227 10.5687C21.7342 11.4839 22.0606 12.5599 22.0606 13.6607C22.0589 15.1362 21.4719 16.5508 20.4286 17.5941C19.3853 18.6375 17.9707 19.2244 16.4952 19.2262ZM16.4952 10.3214C15.8347 10.3214 15.1891 10.5173 14.64 10.8842C14.0908 11.2511 13.6628 11.7726 13.4101 12.3828C13.1573 12.993 13.0912 13.6644 13.22 14.3122C13.3489 14.9599 13.6669 15.5549 14.1339 16.0219C14.6009 16.4889 15.1959 16.807 15.8437 16.9358C16.4915 17.0647 17.1629 16.9985 17.7731 16.7458C18.3832 16.493 18.9048 16.065 19.2717 15.5159C19.6386 14.9668 19.8345 14.3211 19.8345 13.6607C19.8336 12.7753 19.4815 11.9265 18.8554 11.3004C18.2294 10.6744 17.3805 10.3223 16.4952 10.3214Z"
                    fill="white"
                  />
                  <path
                    d="M16.4941 32.5834L7.10398 21.5092C6.97351 21.3429 6.84438 21.1755 6.71663 21.0072C5.11344 18.8938 4.24702 16.3133 4.25001 13.6607C4.25001 10.4134 5.54 7.29909 7.83621 5.00289C10.1324 2.70668 13.2467 1.41669 16.4941 1.41669C19.7414 1.41669 22.8557 2.70668 25.1519 5.00289C27.4481 7.29909 28.7381 10.4134 28.7381 13.6607C28.7407 16.3121 27.8747 18.8913 26.2726 21.0038L26.2715 21.0072C26.2715 21.0072 25.9376 21.4457 25.8875 21.5047L16.4941 32.5834ZM8.49424 19.6659C8.49424 19.6659 8.75359 20.0087 8.81258 20.0822L16.4941 29.1417L24.1855 20.0699C24.2345 20.0087 24.495 19.6637 24.4961 19.6625C25.8065 17.9363 26.5146 15.828 26.5119 13.6607C26.5119 11.0038 25.4565 8.45575 23.5778 6.57704C21.699 4.69833 19.151 3.64288 16.4941 3.64288C13.8372 3.64288 11.2891 4.69833 9.41036 6.57704C7.53165 8.45575 6.4762 11.0038 6.4762 13.6607C6.47345 15.8294 7.1824 17.939 8.49424 19.6659Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className={styles.text}>
                <p>Location</p>
                <p>Pune, Maharashtra</p>
              </div>
            </div>
          </div>
          <div className={styles.mainHeading}>
            <h1>Global Education Summit 2026</h1>
          </div>
          <div className={styles.buttonsCard}>
            <Link to="/register">Student Registration</Link>
            <Link to="/register">Exhibitor Registration</Link>
          </div>
        </div>
        <video src={video} autoPlay loop muted></video>
      </div>
      <div className={styles.countdownSection}>
        <Count />
      </div>
      <div className={styles.infoSection}>
        <SubNavbar />
        <div className={styles.contentSection} id="introduction">
          {/* <img
            className={styles.backIllustration}
            src={BackIllustration}
            alt=""
          /> */}
          <img src={page} className={styles.introImage} alt="" />
          {/* <section id="introduction" className={styles.introductionSec}>
            <div className={styles.intoCard}>
              <div className={styles.textCard}>
                <div className={styles.text}>
                  <h3>Introduction</h3>
                  <h5>GES 2026</h5>
                  <p>
                    This is a landmark event shaping the future of Indian
                    academia at a global level. The summit gathers policymakers,
                    educators, researchers, and industry leaders to drive
                    innovation, sustainable growth, and meaningful
                    collaboration. The platform supports India’s vision of
                    empowering learners to become globally competent citizens.
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="61"
                    height="93"
                    viewBox="0 0 61 93"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_2475_1813)">
                      <path d="M10 8V77L46.5 44.5L10 8Z" fill="white" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_2475_1813"
                        x="0"
                        y="0"
                        width="60.5"
                        height="93"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="2" dy="4" />
                        <feGaussianBlur stdDeviation="6" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0156863 0 0 0 0 0.0156863 0 0 0 0 0.0156863 0 0 0 0.14 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2475_1813"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2475_1813"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <img className={styles.introImage1} src={IntroImg} alt="" />
            </div>
            <div className={styles.intoCard}>
              <img src={IntroImg} alt="" />
            </div>
            <div className={styles.intoCard}>
              <img src={IntroImg} alt="" />
            </div>
          </section> */}
        </div>{" "}
        <section id="highlights" className={styles.highlightsSection}>
          <img src={Highlight} className={styles.highlightImage} alt="" />
        </section>
        <section className={styles.layoutSection} id="layout">
          <h5>Floor Layout</h5>
          <img className={styles.floortImage} src={map} alt="" />
          <img className={styles.floortImage} src={map2} alt="" />
        </section>
        <section id="gallary" className={styles.gallarySection}>
          <ImageCarousel images={images} />
        </section>
        <section id="fees" className={styles.feesSection}>
          <h2 className={styles.title}>Participation Fees</h2>

          {/* Cards */}
          <div className={styles.cardsWrapper}>
            <div className={styles.card}>
              <span className={styles.type}>Type A</span>
              <h3>OCTONORM STRUCTURE</h3>
              <div className={styles.price}>
                <strong>INR 25,000</strong>
                <span>per square meter</span>
              </div>
            </div>

            <div className={styles.card}>
              <span className={styles.type}>Type B</span>
              <h3>BARE SHELL ISLAND BOOTH</h3>
              <div className={styles.price}>
                <strong>INR 23,000</strong>
                <span>per square meter</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className={styles.imageWrapper}>
            <img src={fee} alt="Exhibition Layout" />
          </div>

          {/* Notes */}
          <div className={styles.notes}>
            <p>
              <strong>Note:</strong> A 10% additional charges will be applicable
              for corner booth’s, subject to availability and floor plan
              approval. All booth’s allocation shall be made on first come serve
              basis upon receipt of full payment.
            </p>

            <p>
              <strong>Note:</strong> Exhibitors selecting the bare shell option
              shall be responsible for their own booth design, fabrication and
              dismantling, in compliance with venue and safety regulations.
            </p>
          </div>
        </section>
        <section id="contact" className={styles.contactSection}>
          <h2>Contact Details</h2>

          <div className={styles.infoWrapper}>
            <div className={styles.infoItem}>
              <FiPhone />
              <span>
                <a href="tel:+918459865102">+91 84598 65102</a>
                <span className={styles.divider}>|</span>
                <a href="tel:+918698476373">+91 86984 76373</a>
              </span>
            </div>

            <div className={styles.infoItem}>
              <FiMail />
              <span>
                <a href="mailto:info.ges@janikkintl.in">
                  info.ges@janikkintl.in
                </a>
                <span className={styles.divider}>|</span>
                <a href="mailto:janikk.intl@gmail.com">janikk.intl@gmail.com</a>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
