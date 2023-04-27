import React from 'react';

import Image from 'next/image';

import styles from './jobCard.module.scss';
import moedinha from '../../../../assets/images/moedinha.jpeg';

type JobCardType = {
  imageSource: string;
  title: string;
}

export const JobCard = ({ imageSource, title }: JobCardType) => {

    const handleClick = () => {
        console.log('clicked');
    }

  return (
    <div className={styles.jobCard}>
      <div className={styles.image}>
        <Image src={imageSource} alt="Moedinha" width={100} height={100} layout="responsive" objectFit="contain"/>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>

          <div className={styles.tagsContainer}>
            {/* {data.tags.map((item) => (
              <div className="card__tag" key={item.id}>
                <strong className="card__tag-text">{item.tag_name}</strong>
              </div>
            ))} */}
          </div>

          <button type="button" className={styles.button} onClick={() => handleClick()}>
            see more
          </button>
        </div>
      </div>
    </div>
  );
};