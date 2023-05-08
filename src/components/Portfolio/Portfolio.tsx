import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';

import { JobCard } from './components/JobCard';
import { Arrow } from './components/Arrow';
import { LocaleContext } from '@/context/LocaleContext';
import { Project } from '@/types/project';

import styles from './portfolio.module.scss';

async function getProjects(locationCode: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects?locale=${locationCode}&populate=*`);
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
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          infinite: true,
          centerPadding: '24px',
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          infinite: true,
          centerPadding: '24px',
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    getProjects(locale).then((data) => {
      const sortedProjects = data.data.sort((a: Project, b: Project) => {
        return parseInt(b.attributes.year) - parseInt(a.attributes.year);
      });
      setProjects(sortedProjects);
    });
  }, [locale]);

  return (
    <Slider {...settings}>
      {projects.map((project) => (
        <JobCard
          imageSource={project.attributes.case.data.attributes.url}
          title={project.attributes.name}
          tags={project.attributes.tags.data}
          key={project.id}
          id={JSON.stringify(project.id)}
        />
      ))}
    </Slider>
  );
};
