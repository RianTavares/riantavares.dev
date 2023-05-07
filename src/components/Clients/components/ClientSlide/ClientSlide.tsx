import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from  './clientSlide.module.scss';
import Image from "next/image";

interface Partner {
  attributes: {
      createdAt: string;
      name: string;
      partnerImg: {
        data: {
          attributes: {
            alternativeText: string;
            url: string;
            width: number
          };
        };
      };
    },
    id: number;
}

async function getPartners() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/partners?populate=*`);
  return res.json();
}


export const Slide = () => {
    const [partners, setPartners] = useState<Partner[]>([]);

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

    useEffect(() => {
        getPartners().then((data) => setPartners(data.data));
      }, []);

    return (
      <div className={styles.clientSlide}>
        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.id} className={styles.logoContainer}>
              <Image 
                src={partner.attributes.partnerImg.data.attributes.url} 
                className={styles.logo}
                style={{
                  maxWidth: partner.attributes.partnerImg.data.attributes.width
                }}
                alt={partner.attributes.partnerImg.data.attributes.alternativeText}
                width={100} 
                height={100} 
                loading="eager"
                unoptimized
              />
            </div>
          ))}
        </Slider>
      </div>
    );
}

export const ClientSlide = React.memo(Slide);
