import styles from './Colors.module.scss';
import { colorVariables } from '../cssVariables';
import { TokenListBasic, RowChildrenComponent } from '../TokenListBasic';

const Colors = (): JSX.Element => {
    const ColorsValue: RowChildrenComponent = ({ variable = '' }) => {
        return <div className={styles.value} style={{ backgroundColor: `var(${variable})` }} />;
    };

    return (
        <TokenListBasic tokenName="Colors" variableList={colorVariables}>
            <ColorsValue />
        </TokenListBasic>
    );
}


export default Colors;