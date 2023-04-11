import React from 'react';

import Image from 'next/image';

import styles from './jobCard.module.scss';
import moedinha from '../../../../assets/images/moedinha.jpeg';

export const JobCard = () => {

    const handleClick = () => {
        console.log('clicked');
    }

  return (
    <div className={styles.jobCard}>
      <Image src={moedinha} alt="Moedinha" className={styles.image} />

      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <p className={styles.title}>JOB NAME</p>

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