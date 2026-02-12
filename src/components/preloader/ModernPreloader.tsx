    'use client';

import { useEffect, useState } from 'react';
import styles from './ModernPreloader.module.scss';

export default function ModernPreloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Remove preloader from DOM after animation completes
    const removeTimer = setTimeout(() => {
      const preloader = document.querySelector('[data-preloader]');
      if (preloader) {
        preloader.remove();
      }
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      data-preloader
      className={styles.preloader}
    >
      <div className={styles.preloaderInner}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <img
            src="/assets/img/logo/logo-black.png"
            alt="Loading"
            className={styles.logo}
          />
        </div>

        {/* Animated circles */}
        <div className={styles.animatedCircles}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>

        {/* Loading text */}
        <div className={styles.loadingText}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>

      {/* Background gradient */}
      <div className={styles.gradientBg}></div>
    </div>
  );
}
