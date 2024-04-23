import React from 'react';

import styles from './Avatar.module.css';

interface IAvatar {
 src: string;
 hasBorder?: boolean;
}

const Avatar = ({ src, hasBorder = true }: IAvatar) => {
  return (
   <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src}/>
  );
}

export default Avatar;