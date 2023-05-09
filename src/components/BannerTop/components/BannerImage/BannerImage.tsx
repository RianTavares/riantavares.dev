import React from "react";
import styles from './bannerImage.module.scss';
import Image from "next/image";
import Logo from '../../../../assets/images/rian-tavares-logo.svg';
import { Slogan } from "../Slogan";

export const BannerImage = () => {
  return (
    <div className={styles.bannerImageWrapper}>
        <div className={styles.bannerImage} />
        <div className={styles.bannerImageGradient} />

        <div className={styles.logoWrapper}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <Image className={styles.logo} src={Logo} alt="Rian Tavares Dev Logo"/>
            <Slogan />
          </div>
        </div>
    </div>
  );
};
