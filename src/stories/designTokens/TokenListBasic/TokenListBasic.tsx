import { Children, cloneElement, ReactElement, useEffect, useState } from 'react';

import styles from './TokenListBasic.module.scss';

type TokenListBasicProps = {
    variableList: string[];
    tokenName: string;
    children: ReactElement;
};

export const TokenListBasic = ({
    variableList,
    tokenName,
    children,
}: TokenListBasicProps): JSX.Element => {
    const [state, setState] = useState(true);

    useEffect(() => {
        const observer = new MutationObserver(mutations => {
            if (mutations[0].type === 'attributes') {
                setState(!state);
            }
        });

        observer.observe(document.documentElement, {
            attributes: true,
        });
        return () => {
            observer.disconnect();
        };
    }, [state, setState]);

    return (
        <>
            <div className={styles.row}>
                <b>Css Variable</b>
                <b>Value</b>
                <b>{tokenName}</b>
            </div>
            <ul className={styles.list}>
                {variableList.map(variable => {
                    const value = getComputedStyle(document.documentElement).getPropertyValue(
                        variable,
                    );

                    return (
                        <li className={styles.row} key={variable}>
                            <div>{variable}</div>
                            <div>{value}</div>
                            {Children.map(children, (child: ReactElement) =>
                                cloneElement(child, { variable }),
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
