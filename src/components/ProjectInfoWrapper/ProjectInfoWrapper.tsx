import React, { useContext } from 'react';
import { DemoLinks } from '../DemoLinks';
import { StackIcons } from '../StackIcons';
import { LocaleContext } from '@/context/LocaleContext';

import styles from './projectInfoWrapper.module.scss';


type ProjectInfoWrapperType = {
    client: string;
    stack: { name: string[] };
    year: string;
    demo: {};
  }

export const ProjectInfoWrapper = ({ client, stack, year, demo }: ProjectInfoWrapperType) => {
    const { translate } = useContext(LocaleContext);
    
    function isNotEmpty(obj: {}) {
        return !(Object.keys(obj).length === 0);
    }

    return (
        <section className={styles.projectInfos}>
        <section className={styles.projectInfosContent}>
            <div className={styles.column}>
                <section className={styles.infoBlock}>
                    <h2 className={styles.infoTitle}>{translate('components.projectInfo.client')}:</h2>
                    <p className={styles.infoDescription}>{client}</p>
                </section>

                <section className={styles.infoBlock}>
                    <h2 className={styles.infoTitle}>{translate('components.projectInfo.technologies')}:</h2>
                    <StackIcons names={stack.name} />
                </section>
            </div>
            <div className={styles.column}>
                <section className={styles.infoBlock}>
                    <h2 className={styles.infoTitle}>{translate('components.projectInfo.year')}:</h2>
                    <p className={styles.infoDescription}>{year}</p>
                </section>

                {(isNotEmpty(demo) && (
                    <section className={styles.infoBlock}>
                        <h2 className={styles.infoTitle}>{translate('components.projectInfo.checkit')}:</h2>
                        <div className={styles.liveDemo}><DemoLinks demo={demo} /></div>
                    </section>
                ))
                }
            </div>
        </section>
    </section>
    )
}