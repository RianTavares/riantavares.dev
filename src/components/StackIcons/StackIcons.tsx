import React from 'react';
import Image from 'next/image';
import { Techs } from '@/types/stack';

import styles from './stackIcons.module.scss';

import ReactNativeImg from '../../assets/images/stack-icons/react-native-icon.png';
import ExpoImg from '../../assets/images/stack-icons/expo-icon.png';
import ReduxImg from '../../assets/images/stack-icons/redux-icon.png';
import StyledComponentsImg from '../../assets/images/stack-icons/styled-component-icon.png';
import ReactImg from '../../assets/images/stack-icons/react-icon.png';
import NodeImg from '../../assets/images/stack-icons/node-icon.png';
import NextImg from '../../assets/images/stack-icons/next-icon.png';
import SassImg from '../../assets/images/stack-icons/sass-icon.png';

export const StackIcons = ({ names }: Techs) => {

    const getImageSource = (name: string | null) => {
        switch (name) {
          case 'react-native':
            return ReactNativeImg;
          case 'expo':
            return ExpoImg;
          case 'redux':
            return ReduxImg;
          case 'styled-components':
            return StyledComponentsImg;
          case 'react':
            return ReactImg;
          case 'node':
            return NodeImg;
          case 'next':
            return NextImg;
            case 'sass':
              return SassImg;
          default:
            return null;
        }
    };

    return (
        <section className={styles.stackIconsContainer}>
          {names.map((techName) => {
            const imageSrc = getImageSource(techName);
            return imageSrc ? (
              <section className={styles.iconContainer}>
                <Image
                  key={techName}
                  src={imageSrc}
                  alt={techName || "Tech icon"}
                  title={techName || "Tech icon"}
                />
                <section className={styles.mobiAlt}>
                  {techName || "Tech icon"}
                </section>
              </section>
            ) : null;
          })}
        </section>
    );
}