import React, { useContext, useEffect } from 'react';

import { SplineLoadContext } from '@/context/SplineLoadContext';
import { AtomLoading, AppBar } from '@/components';
import Home from './Home';

import styles from './index.module.scss';

const toggleBodyClass = (isLoading: boolean) => {
  if (isLoading) {
    document.body.classList.add(styles.atomLoading);
  } else {
    document.body.classList.remove(styles.atomLoading);
  }
};

export default function HomePage() {
  const { isLoading } = useContext(SplineLoadContext);

  useEffect(() => {
    toggleBodyClass(isLoading);
  }, [isLoading]);

  return (
    <div className={styles.layout}>
      {isLoading && <AtomLoading />}
      <AppBar />
      <Home />
    </div>
  );
}
