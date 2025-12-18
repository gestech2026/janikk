import { useEffect, useRef, useState } from "react";

export function useViewportVideoWithSound(threshold = 0.6) {
  const videoRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);

  // 1️⃣ Detect first REAL user interaction
  useEffect(() => {
    const unlockAudio = () => {
      setUserInteracted(true);
      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("touchstart", unlockAudio);
    };

    document.addEventListener("click", unlockAudio);
    document.addEventListener("touchstart", unlockAudio);

    return () => {
      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("touchstart", unlockAudio);
    };
  }, []);

  // 2️⃣ Play / pause based on viewport
  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;

        if (entry.isIntersecting) {
          // Enable sound ONLY if user already interacted
          video.muted = !userInteracted;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold }
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [userInteracted, threshold]);

  return videoRef;
}
