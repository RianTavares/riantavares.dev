import React from "react";
import styles from './slogan.module.scss';
import localesService from "@/locales/locales.service";

export const Slogan = () => {
  return (
    <p className={styles.slogan}>{localesService.translate('components.slogan.phrase')}</p>
  );
};
