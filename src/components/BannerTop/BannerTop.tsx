import React from "react";
import styles from './bannerTop.module.scss';
import { BannerImage } from "./components/BannerImage";
export const BannerTop = () => {
  return (
    <section className={styles.bannerTop}> 
        <BannerImage />
        <div className={styles.macbook} />
        <div className={styles.mask} />
    </section>
  );
};
