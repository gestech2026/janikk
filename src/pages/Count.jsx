import React, { useEffect, useState, useMemo } from "react";
import styles from "./Countdown.module.scss";

// Calculation logic kept outside to prevent re-creation on render
const calculateTimeLeft = (targetDate) => {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const pad = (n) => String(n).padStart(2, "0");

export default function Count({
  target = "2026-03-13T00:00:00",
  showLabels = true,
}) {
  // Memoize the date object so the useEffect dependency is stable
  const targetDate = useMemo(() => new Date(target), [target]);

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]); // Refers to the memoized stable date

  return (
    <div
      className={styles.container}
      role="region"
      aria-label="Countdown Timer"
    >
      <div className={styles.countdownInner}>
        <TimeCard value={timeLeft.days} label="Days" showLabel={showLabels} />
        <TimeCard value={timeLeft.hours} label="Hours" showLabel={showLabels} />
        <TimeCard
          value={timeLeft.minutes}
          label="Mins"
          showLabel={showLabels}
        />
        <TimeCard
          value={timeLeft.seconds}
          label="Secs"
          showLabel={showLabels}
        />
      </div>
    </div>
  );
}

function TimeCard({ value, label, showLabel }) {
  return (
    <div className={styles.card}>
      <div className={styles.value} aria-live="polite">
        {pad(value)}
      </div>
      {showLabel && <div className={styles.label}>{label}</div>}
    </div>
  );
}
