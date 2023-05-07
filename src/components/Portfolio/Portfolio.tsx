import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';

import { JobCard } from './components/JobCard';
import { Arrow } from './components/Arrow';
import { LocaleContext } from '@/context/LocaleContext';

import styles from './portfolio.module.scss';

interface Project {
  id: number;
  attributes: {
    name: string;
    year: string;
    stack: {
      name: string[];
    };
    client: string;
    demo: {
      web: string;
      webUrl: string;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    postDescription: string;
    shortDescription: string;
    case: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: null | string;
          caption: null | string;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: null | string;
              size: number;
              width: number;
              height: number;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: null | string;
          provider: string;
          provider_metadata: null | Record<string, unknown>;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    postImg: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: null | string;
          caption: null | string;
          width: number;
          height: number;
          formats: {
            small: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: null | string;
              size: number;
              width: number;
              height: number;
            };
            thumbnail: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: null | string;
              size: number;
              width: number;
              height: number;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: null | string;
          provider: string;
          provider_metadata: null | Record<string, unknown>;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    localizations: {
      data: unknown[];
    };
    tags: {
      data: unknown[];
    }
  };
}

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
    getProjects(locale).then((data) => setProjects(data.data));
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
