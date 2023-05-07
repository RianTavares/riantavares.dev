import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { LocaleContext } from '@/context/LocaleContext';

import styles from './jobCard.module.scss';

type JobCardType = {
  imageSource: string;
  title: string;
  tags: any[];
  id: string;
}

export const JobCard = ({ imageSource, title, tags, id}: JobCardType) => {
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
          unoptimized
        />
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>

          <div className={styles.tagsContainer}>
            {tags.map((tag) => (
              <div className={styles.tag} key={tag.id}>
                <strong>{tag.attributes.name}</strong>
              </div>
            ))}
          </div>

          <Link className={styles.ctaButton} href={`/project/${id}`}>
            {translate('components.portfolio.seeMoreButton')}
          </Link>
        </div>
      </div>
    </div>
  );
};