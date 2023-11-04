import React, { useEffect, useState, useContext } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { Partner } from '@/types/partner';
import { LocaleContext } from '@/context/LocaleContext';
import { AtomLoading } from "@/components";
import { fetchWithRetry } from "@/utils/fetchWithRetry";

import styles from './clientSlide.module.scss';

async function getPartners() {
  try {
    const res = await fetchWithRetry(`${process.env.NEXT_PUBLIC_API_URL}/partners?populate=*`);
    return res;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null;
  }
}

const Slide = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const { translate } = useContext(LocaleContext);
  const [loading, setLoading] = useState(true);

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
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
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
    getPartners().then((data) => {
      setLoading(false);
      if (data) {
        setPartners(data.data);
      } else {
        console.error('No data received from API');
      }
    });
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <AtomLoading title={translate('components.clients.loading')}/>
      </div>
    )
  }

  if (!partners.length) {
    return (
      <div className={styles.clientSlide}>
        <div className={styles.errorMessage}>{translate('components.clients.errorMessage')}</div>
      </div>
    )
  }

  return (
    <div className={styles.clientSlide}>
      <Slider {...settings}>
        {partners.map((partner) => (
          <div key={partner.id} className={styles.logoContainer}>
            <Link
              className={styles.partnerLink} 
              href={partner.attributes.url} 
              target="_blank" 
              rel="noopener noreferrer">
              <Image
                src={partner.attributes.partnerImg.data.attributes.url}
                className={styles.logo}
                style={{
                  maxWidth: partner.attributes.partnerImg.data.attributes.width
                }}
                alt={partner.attributes.partnerImg.data.attributes.alternativeText || 'Partner Logo'}
                width={100}
                height={100}
                loading="eager"
                unoptimized
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export const ClientSlide = React.memo(Slide);
