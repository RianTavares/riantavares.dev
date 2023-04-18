import React from 'react';
import { 
    faInstagram, 
    faLinkedin,
    faGithub,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './social.module.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const Social = () => {
    return (
        <div className={styles.social}>
            <a href="https://www.linkedin.com/in/riantavares/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin as IconProp} />
            </a>
            <a href="https://github.com/RianTavares" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub as IconProp} />
            </a>
            <a href="https://www.instagram.com/riantavares.dev/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram as IconProp} />
            </a>
            <a href="https://www.youtube.com/c/SpeakUpTech" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube as IconProp} />
            </a>
      </div>
    )
}