import React, { useState } from "react";
import styles from "./FAQ.module.scss";

const faqData = [
  {
    q: "What types of educational services do you offer?",
    a: "We offer a comprehensive range of services, including academic support, program development, global partnership facilitation, educational tours and industry visits, and technology integration for learning.",
  },
  {
    q: "Who can benefit from JIGES services?",
    a: "Our services cater to individuals seeking international educational opportunities, institutions looking to expand their global reach, and anyone seeking guidance and support in navigating the academic landscape.",
  },
  {
    q: "What makes JIGES different from other educational service providers?",
    a: "We combine the expertise of our established parent company, Leisure Tourism, with a focus on innovation and exceeding client expectations. We offer a personalized approach, global reach, and a commitment to building long-term partnerships.",
  },
  {
    q: "Do you offer any financial aid or scholarships?",
    a: "While we don't directly offer financial aid or scholarships, we can help you explore available options and connect you with relevant resources.",
  },
  {
    q: "How can I learn more about specific programs or services?",
    a: "You can browse our website or contact us directly. Our team is happy to discuss your needs and tailor a solution that meets your specific goals.",
  },
  {
    q: "What are the qualifications of your team members?",
    a: "Our team comprises experienced professionals with diverse backgrounds in education, international relations, and program management. We are passionate about empowering individuals and institutions to achieve their academic aspirations.",
  },
  {
    q: "What are the typical costs associated with your services?",
    a: "Costs vary depending on the specific services you require. We offer transparent pricing and work closely with you to find a solution that fits your budget.",
  },
  {
    q: "How long does it typically take to process applications and program enrollment?",
    a: "Processing times can vary depending on the program and specific requirements. We will provide you with an estimated timeframe and keep you updated throughout the process.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2>FAQ’s</h2>

      <div className={styles.list}>
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className={`${styles.item} ${isOpen ? styles.open : ""}`}
              onClick={() => toggle(index)}
            >
              <div className={styles.question}>
                <span>
                  {/* {index + 1}.*/}
                  {item.q}
                </span>
                <button className={styles.iconr} aria-expanded={isOpen}>
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <rect width="48" height="48" rx="24" fill="#610202" />
                      <path
                        d="M14 24H34"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <rect width="48" height="48" rx="24" fill="#610202" />
                      <path
                        d="M12 24H24M24 24H36M24 24V12M24 24V36"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className={styles.answer}>
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
