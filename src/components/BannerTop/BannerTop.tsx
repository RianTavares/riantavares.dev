import React, { useEffect, useState } from "react";
import styles from './bannerTop.module.scss';
import { BannerImage } from "./components/BannerImage";
import Spline from '@splinetool/react-spline';

export const BannerTop = () => {
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0 });

  const handleResize = () => {
    setWindowSize({ width: window.innerWidth });
  }

  const checkConnectionSpeed = () => {
    if (typeof window !== 'undefined' && window.navigator.connection) {
      const connection = window.navigator.connection;
      const slowSpeeds = ['slow-2g', '2g', '3g'];
    
      if (slowSpeeds.includes(connection.effectiveType)) {
        setIsSlowConnection(true);
      }
    }
  };

  useEffect(() => {
    checkConnectionSpeed();

    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [])

  const sceneUrl = windowSize.width >= 975
    ? "https://prod.spline.design/0Ihtl0UNAs7CjDNN/scene.splinecode"
    : "https://prod.spline.design/EYDHmwEWTPiud8bl/scene.splinecode";

  return (
    <section className={styles.bannerTop}> 
        <BannerImage />
        {
          isSlowConnection ? (
            <div className={styles.macbook} />
          ) : (
            <div className={styles.macbook3D}>
              <Spline scene={sceneUrl} />
            </div>
          )
        }
        <div className={styles.mask} />
        <div className={styles.fadeoutWrapper}></div>
    </section>
  );
};
