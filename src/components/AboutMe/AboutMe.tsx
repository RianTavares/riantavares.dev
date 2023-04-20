import React, { useContext } from "react";
import styles from './aboutMe.module.scss';
import Image from "next/image";
import Profile from '../../assets/images/rian-tavares-dev-profile.png';

import { Patch } from "../Patch";
import { LocaleContext } from '@/context/LocaleContext';

export const AboutMe = () => {
    const { translate } = useContext(LocaleContext);
    return (
        <section id="aboutMe" className={styles.aboutMe}>
            <section className={styles.aboutMeInfoWrapper}>

                <section className={styles.info}>
                    <h1 className={styles.title}>{translate('components.aboutMe.aboutMeStarts')}</h1>
                    <p className={styles.text}>
                        {translate('components.aboutMe.aboutMeText')}
                    </p>
                </section>

                <section className={styles.profile}>
                    <section className={styles.profilePicWrapper}>
                        <Image className={styles.profilePic} src={Profile} alt="Rian Tavares Dev" />
                        <Patch
                            style={{ 
                                bottom: '-45px', 
                                left: '-40px' 
                            }}
                            pacthStyle={{
                                width: 130, 
                                height: 130, 
                            }}>
                            <p className={styles.patchText}><span className={styles.patchNumber}>50</span><span className={styles.patchPlus}>+</span> {translate('components.patches.projectsPart1')} <span className={styles.patchStrongText}>{translate('components.patches.projectsPart2')} </span></p> 
                        </Patch>
                        <Patch
                            style={{ 
                                top: '-65px', 
                                right: '-30px' 
                            }}
                            pacthStyle={{
                                width: 130, 
                                height: 130, 
                            }}>
                            <p className={styles.patchText}><span className={styles.patchNumber}>5</span><span className={styles.patchPlus}>+</span> <br /> {translate('components.patches.experiencePart1')}  <span className={styles.patchStrongText}>{translate('components.patches.experiencePart2')}</span></p> 
                        </Patch>
                    </section>
                </section>
            </section>
        </section>
    )
}