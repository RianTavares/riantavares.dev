import React, { useEffect, useState } from "react";
import styles from './bannerTop.module.scss';
import { BannerImage } from "./components/BannerImage";
import Spline from '@splinetool/react-spline';

export const BannerTop = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
  });

  const handleResize = () => {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
    });
  }

  const RenderSpline = () => {
    if (windowSize.width >= 600) {
      return <Spline scene="https://prod.spline.design/Nl-LBNQpmsqY8C0n/scene.splinecode" />
    } else if (windowSize.width >= 975) {
      return <Spline scene="https://prod.spline.design/s6-X5c0YASLbk6kV/scene.splinecode" />
    } else if (windowSize.width >= 1280) {
      console.log('here')
      return <Spline scene="https://prod.spline.design/s6-X5c0YASLbk6kV/scene.splinecode" />
    } else {
      return <Spline scene="https://prod.spline.design/EYDHmwEWTPiud8bl/scene.splinecode" />
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [])
  return (
    <section className={styles.bannerTop}> 
        <BannerImage />
        {/* <div className={styles.macbook} /> */}
        <div className={styles.macbook3D}>
          {/* <Spline scene="https://prod.spline.design/EYDHmwEWTPiud8bl/scene.splinecode" /> */}
          <RenderSpline />
        </div>
        {/* <div className={styles.mask} /> */}
    </section>
  );
};
