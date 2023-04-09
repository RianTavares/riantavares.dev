import React from "react";
import styles from './aboutMe.module.scss';
import Image from "next/image";
import Profile from '../../assets/images/rian-tavares-dev-profile.png';
import localesService from "@/locales/locales.service";
import { Patch } from "../Patch";

export const AboutMe = () => {
    return (
        <section className={styles.aboutMe}>
            <div className={styles.fadeoutWrapper}></div>
            <section className={styles.aboutMeInfoWrapper}>

                <section className={styles.info}>
                    <h1 className={styles.title}>{localesService.translate('components.aboutMe.aboutMeStarts')}</h1>
                    <p className={styles.text}>
                        {localesService.translate('components.aboutMe.aboutMeText')}
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
                            <p className={styles.patchText}><span className={styles.patchNumber}>50</span><span className={styles.patchPlus}>+</span> Projetos <span className={styles.patchStrongText}>Completos</span></p> 
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
                            <p className={styles.patchText}><span className={styles.patchNumber}>5</span><span className={styles.patchPlus}>+</span> <br /> Anos de <span className={styles.patchStrongText}>experiência</span></p> 
                        </Patch>
                    </section>
                </section>
            </section>
        </section>
    )
}