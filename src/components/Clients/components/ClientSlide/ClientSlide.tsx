import React, { Component } from "react";
import Slider from "react-slick";
import styles from  './clientSlide.module.scss';
import logoTest from '../../../../assets/images/nintendo-logo-test.png';
import Image from "next/image";

export const ClientSlide = () => {
    const settings = {
      autoplay: true,
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            centerMode: false,
            infinite: true,
          },
        },
      ],
    };
    return (
      <div className={styles.clientSlide}>
        <Slider {...settings}>
          <div className={styles.logoContainer}>
            <Image className={styles.logo} src={logoTest} alt="Nintendo Test" />
          </div>
          <div className={styles.logoContainer}>
            <Image className={styles.logo} src={logoTest} alt="Nintendo Test" />
          </div>
          <div className={styles.logoContainer}>
            <Image className={styles.logo} src={logoTest} alt="Nintendo Test" />
          </div>
          <div className={styles.logoContainer}>
            <Image className={styles.logo} src={logoTest} alt="Nintendo Test" />
          </div>
          <div className={styles.logoContainer}>
            <Image className={styles.logo} src={logoTest} alt="Nintendo Test" />
          </div>
          <div className={styles.logoContainer}>
            <Image className={styles.logo} src={logoTest} alt="Nintendo Test" />
          </div>
        </Slider>
      </div>
    );
}