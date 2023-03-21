/* eslint-disable react/jsx-key */
import { Children, cloneElement, ReactElement } from 'react';

import styles from './TokenListBasic.module.scss';

type TokenListBasicNewProps = {
    variableList: Record<string, string>;
    tokenName: string;
    children: ReactElement;
};

export type RowChildrenComponent = (props: { variable?: string }) => JSX.Element;

export const TokenListBasicNew = ({
    variableList,
    tokenName,
    children,
}: TokenListBasicNewProps): JSX.Element => {
    return (
        <>
            <div className={styles.row}>
                <b>Css Variable</b>
                <b>Value</b>
                <b>{tokenName}</b>
            </div>
            <ul className={styles.list}>
                {Object.keys(variableList).map(variableName => {
                    return (
                        <li className={styles.row} key={variableName}>
                            <div>{variableName}</div>
                            <div>{variableList[variableName]}</div>
                            {Children.map(children, (child: ReactElement) =>
                                cloneElement(child, { variable: variableList[variableName] }),
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export const TokenColorList = ({
    variableList,
    children,
}: Omit<TokenListBasicNewProps, 'tokenName'>): JSX.Element => {
    const splitIntoChunks = (array: string[]): Array<string[]> => {
        const size = 9;
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }

        return result;
    };

    const variableListByChunks = splitIntoChunks(Object.keys(variableList));

    return (
        <>
            <div className={styles.colourListWrapper}>
                {variableListByChunks.map(variableListChunks => {
                    return (
                        <ul className={styles.colourList}>
                            {variableListChunks.map(variableName => {
                                return (
                                    <li className={styles.item} key={variableName}>
                                        {Children.map(children, (child: ReactElement) =>
                                            cloneElement(child, {
                                                variable:
                                                    variableName.includes('-js-') ||
                                                    variableName.includes('-md-')
                                                        ? variableList[variableName]
                                                        : `var(${variableName})`,
                                            }),
                                        )}
                                        {!variableName.includes('brand') ? (
                                            <div>{variableList[variableName]},</div>
                                        ) : null}
                                        <div>{variableName}</div>
                                    </li>
                                );
                            })}
                        </ul>
                    );
                })}
            </div>
        </>
    );
};
