import React from 'react';

import styles from './ProfileCard.module.scss';

type Props = {
  member: User;
};

type User = {
  name: string;
  email: string;
};

const ProfileCard = ({ member }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <p className={styles.name}>{member.name}</p>
        <p className={styles.email}>{member.email}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
