import styles from './Others.module.scss';
import {
    animationVariables,
    otherHeightVariables,
    filterCssVariables,
} from '../cssVariables';
import { RowChildrenComponent, TokenListBasicNew, TokenListBasic } from '../TokenListBasic';

export const Animation = (): JSX.Element => {
    const AnimationValue: RowChildrenComponent = ({ variable = '' }) => {
        return (
            <div className={styles.animation} style={{ animationDuration: `var(${variable})` }} />
        );
    };

    return (
        <TokenListBasic tokenName="Animation" variableList={animationVariables}>
            <AnimationValue />
        </TokenListBasic>
    );
};

export const Radius = (): JSX.Element => {
    const RadiusValue: RowChildrenComponent = ({ variable = '' }) => {
        return <div className={styles.radius} style={{ borderRadius: `${variable}` }} />;
    };

    const variableList = filterCssVariables(styles, '--border-radius');

    return (
        <TokenListBasicNew tokenName="Radius" variableList={variableList}>
            <RadiusValue />
        </TokenListBasicNew>
    );
};

export const Height = (): JSX.Element => {
    const HeightValue: RowChildrenComponent = ({ variable = '' }) => {
        return <div className={styles.otherHeight} style={{ height: `var(${variable})` }} />;
    };

    return (
        <TokenListBasic tokenName="Height" variableList={otherHeightVariables}>
            <HeightValue />
        </TokenListBasic>
    );
};

export const AspectRatio = (): JSX.Element => {
    const RadiusValue: RowChildrenComponent = ({ variable = '' }) => {
        return <div className={styles.radius} style={{ aspectRatio: `${variable}` }} />;
    };

    const variableList = filterCssVariables(styles, '--aspect-ratio');

    return (
        <TokenListBasicNew tokenName="AspectRatio" variableList={variableList}>
            <RadiusValue />
        </TokenListBasicNew>
    );
};

export const Elevation = (): JSX.Element => {
    const RadiusValue: RowChildrenComponent = ({ variable = '' }) => {
        return <div className={styles.radius} style={{ boxShadow: `${variable}` }} />;
    };

    const variableList = filterCssVariables(styles, '--shadow');

    return (
        <TokenListBasicNew tokenName="Elevation" variableList={variableList}>
            <RadiusValue />
        </TokenListBasicNew>
    );
};

export const OtherVars = (): JSX.Element => {

    return (
        <>
            <Animation />
            <Radius />
            <Height />
            <AspectRatio />
            <Elevation />
        </>
    );
};

