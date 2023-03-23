import React from 'react';
import style from './link.module.scss';

type LinkProps = {
    children: React.ReactNode;
    url: string;
};

export const Link = ({children, url}: LinkProps) => {
    return (<a href={url} className={style.navLink}>{children}</a>)
}
