import styles from './Spacing.module.scss';
import { spacingVariables } from '../cssVariables';
import { TokenListBasic, RowChildrenComponent } from '../TokenListBasic';

export const Spacing = (): JSX.Element => {
    const SpacingValue: RowChildrenComponent = ({ variable = '' }) => {
        return (
            <div style={{ width: `var(${variable})` }}>
                <div className={styles.value} />
            </div>
        );
    };

    return (
        <TokenListBasic tokenName="Spacing" variableList={spacingVariables}>
            <SpacingValue />
        </TokenListBasic>
    );
};
