import React, { useContext } from 'react';
import { LocaleContext } from '@/context/LocaleContext';
import { Link } from './components/Link';

type NavigationType = {
    className: string;
};

export const Navigation = ({ className }: NavigationType) => {
    const { translate } = useContext(LocaleContext);

    return (
        <nav className={className}>
            <Link url="#aboutMe">{translate('components.appBar.aboutme')}</Link>
            {/* <Link url="#">{translate('components.appBar.myjob')}</Link> */}
            <Link url="#clients">{translate('components.appBar.clients')}</Link>
            <Link url="#portfolio">{translate('components.appBar.portfolio')}</Link>
            {/* <Link url="#">{translate('components.appBar.testimony')}</Link> */}
            {/* <Link url="#">{translate('components.appBar.contact')}</Link> */}
        </nav>
    )
}