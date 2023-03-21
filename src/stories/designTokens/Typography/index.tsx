import { RowChildrenComponent, TokenListBasic, TokenListBasicNew } from '../TokenListBasic';
import {
    fontFamilyVariables,
    filterCssVariables,
} from '../cssVariables';
import styles from './Typography.module.scss';

export const FontFamily = (): JSX.Element => {
    const FontFamilyValue: RowChildrenComponent = ({ variable = '' }) => {
        return <div style={{ fontFamily: `var(${variable})` }}>Lorem ipsum dolor sit.</div>;
    };

    return (
        <TokenListBasic tokenName="Font family" variableList={fontFamilyVariables}>
            <FontFamilyValue />
        </TokenListBasic>
    );
};

export const FontWeight = (): JSX.Element => {
    const FontFamilyValue: RowChildrenComponent = ({ variable = '' }) => {
        return <div style={{ fontWeight: `${variable}` }}>Lorem ipsum dolor sit.</div>;
    };

    const variableList = filterCssVariables(styles, '--font-weight');

    return (
        <TokenListBasicNew tokenName="Font Weight" variableList={variableList}>
            <FontFamilyValue />
        </TokenListBasicNew>
    );
};

export const LineHeightNew = (): JSX.Element => {
    const LineHeightValue: RowChildrenComponent = ({ variable = '' }) => {
        return (
            <div>
                <p style={{ lineHeight: `${variable}`, background: 'var(--color-brand-primary)' }}>
                    Lorem ipsum dolor sit.
                </p>
            </div>
        );
    };

    const variableList = filterCssVariables(styles, '--line-height');

    return (
        <TokenListBasicNew tokenName="Line height" variableList={variableList}>
            <LineHeightValue />
        </TokenListBasicNew>
    );
};

export const FontSizeNew = (): JSX.Element => {
    const FontSizeValue: RowChildrenComponent = ({ variable = '' }) => {
        return <div style={{ fontSize: `${variable}` }}>Lorem ipsum dolor sit.</div>;
    };

    const variableList = filterCssVariables(styles, '--font-size');

    return (
        <TokenListBasicNew tokenName="Font size" variableList={variableList}>
            <FontSizeValue />
        </TokenListBasicNew>
    );
};

export const BaseStory = (): JSX.Element => {
    return (
       <>
        <FontFamily />
        <FontWeight />
        <FontSizeNew />
        <LineHeightNew />
       </>
    );
};