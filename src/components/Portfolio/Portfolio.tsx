import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';

import { JobCard } from './components/JobCard';
import { Arrow } from './components/Arrow';
import { LocaleContext } from '@/context/LocaleContext';

import styles from './portfolio.module.scss';

interface Project {
  id: number;
  name: string;
  description: string;
  date: string;
  android: boolean;
  android_url: string;
  case: { [key: string]: any };
  created_at: string;
  ios: boolean;
  ios_url: string | null;
  locale: string;
  localizations: any[];
  post: string;
  post_banner: { [key: string]: any };
  post_title: string;
  published_at: string;
  see_more_button: string;
  slug: string;
  tags: any[];
  updated_at: string;
  web: boolean;
  web_url: string | null;
}


async function getProjects(test: string) {
  const res = await fetch(`https://content-manager-rt.herokuapp.com/projects?_locale=${test}&_sort=id:DESC`);
  return res.json();
}

export const Portfolio = () => {
  const { locale } = useContext(LocaleContext);
  const [projects, setProjects] = useState<Project[]>([]);

  const settings = {
    className: `${styles['portfolio-slider']}`,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: true,
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />,
    centerMode: false,
    centerPadding: '50px',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: '30px',
          arrows: false,
        },
      },
    ],
  };


  useEffect(() => {
    getProjects(locale).then((data) => setProjects(data));
  }, [locale]);

  return (
    <Slider {...settings}>
      {projects.map((project) => (
        <JobCard
          imageSource={project.case.url}
          title={project.name}
          key={project.id} 
        />
      ))}
    </Slider>
  );
};
