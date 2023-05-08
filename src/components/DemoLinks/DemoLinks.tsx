import React from "react";
import Image from "next/image";
import Link from 'next/link'
import { DemoLinksProps } from '@/types/demo';

import appleButton from '../../assets/images/apple-store-badge.png';
import playStoreButton from '../../assets/images/google-play-badge.png';

import styles from './demoLinks.module.scss';

export const DemoLinks: React.FC<DemoLinksProps> = ({ demo }) => {
  return (
    <>
      {demo.web && demo.webUrl && (
        <Link className={styles.demoButton} href={demo.webUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
        </Link>
      )}
      {demo.android && demo.androidUrl && (
        <Link href={demo.androidUrl} className={styles.storesButton} target="_blank" rel="noopener noreferrer">
            <Image 
                src={playStoreButton} 
                className={styles.image}
                alt='android'
                width={100} 
                height={100} 
                loading="eager"
                unoptimized
            />
        </Link>
      )}
      {demo.ios && demo.iosUrl && (
        <Link href={demo.iosUrl} className={styles.storesButton} target="_blank" rel="noopener noreferrer">
            <Image 
                src={appleButton} 
                className={styles.image}
                alt='ios'
                width={100} 
                height={100} 
                loading="eager"
                unoptimized
            />
        </Link>
      )}
    </>
  );
};