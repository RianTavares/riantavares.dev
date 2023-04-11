import React, { useContext} from "react";
import styles from './slogan.module.scss';
import { LocaleContext } from "@/context/LocaleContext";

export const Slogan = () => {
  const { translate } = useContext(LocaleContext);

  return (
    <p className={styles.slogan}>{translate('components.slogan.phrase')}</p>
  );
};
