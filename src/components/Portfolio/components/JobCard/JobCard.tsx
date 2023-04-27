import React, { useContext } from 'react';
import Image from 'next/image';
import { LocaleContext } from '@/context/LocaleContext';

import styles from './jobCard.module.scss';

type JobCardType = {
  imageSource: string;
  title: string;
  tags: any[];
}

export const JobCard = ({ imageSource, title, tags}: JobCardType) => {
  const { translate } = useContext(LocaleContext);

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <div className={styles.jobCard}>
      <div className={styles.imageContainer}>
        <Image 
          src={imageSource} 
          className={styles.image}
          alt={title}
          width={100} 
          height={100} 
          loading="eager"
        />
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>

          <div className={styles.tagsContainer}>
            {tags.map((tag) => (
              <div className={styles.tag} key={tag.id}>
                <strong>{tag.tag_name}</strong>
              </div>
            ))}
          </div>

          <button type="button" className={styles.ctaButton} onClick={() => handleClick()}>
            {translate('components.portfolio.seeMoreButton')}
          </button>
        </div>
      </div>
    </div>
  );
};