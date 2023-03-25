import React from "react";
import styles from './aboutMe.module.scss';

export const AboutMe = () => {
    return (
        <section className={styles.aboutMe}>
            <div className={styles.fadeoutWrapper}></div>
            <section className={styles.aboutMeInfoWrapper}>
                <h1 className={styles.title}>OLÁ,</h1>
                <p className={styles.text}>
                    me chamo Rian Tavares. Sou desenvolvedor de software nascido e criado no Rio de Janeiro e baseado, 
                    atualmente em Munique, Alemanha. Tenho aproximadamente 7 anos de experiência. Sou um entusiasta do mundo UI/UX, 
                    sou mentor nas horas vagas e sonho em ajudar as pessoas utilizando meus conhecimentos.
                </p>
            </section>

        </section>
    )
}