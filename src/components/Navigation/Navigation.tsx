import React, { useContext } from 'react';
import { LocaleContext } from '@/context/LocaleContext';
import { MenuControlContext } from '@/context/MenuControlContext';
import { Link } from './components/Link';

type NavigationType = {
    className: string;
    isClickable?: true;
};

export const NavLinks = ({ className, isClickable }: NavigationType) => {
    const { translate } = useContext(LocaleContext);
    const { clickHandler } = useContext(MenuControlContext);

    return (
        <nav className={className}>
            <Link url="/#aboutMe" onClick={isClickable ? clickHandler : undefined}>{translate('components.appBar.aboutme')}</Link>
            <Link url="/#clients" onClick={isClickable ? clickHandler : undefined}>{translate('components.appBar.clients')}</Link>
            <Link url="/#portfolio" onClick={isClickable ? clickHandler : undefined}>{translate('components.appBar.portfolio')}</Link>
            {/* <Link url="#">{translate('components.appBar.contact')}</Link> */}
        </nav>
    )
}

export const Navigation = React.memo(NavLinks);
