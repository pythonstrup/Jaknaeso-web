import React from 'react';

import styles from './UserActionFooter.module.scss';

type Props = {
  memberId: number;
};

const UserActionFooter = ({ memberId }: Props) => {
  const handleLogout = () => {};
  const handleWithdraw = () => {};
  return (
    <div className={styles.actionsContainer}>
      <span className={styles.action} onClick={handleLogout}>
        로그아웃
      </span>
      <span className={styles.action} onClick={handleWithdraw}>
        회원 탈퇴
      </span>
    </div>
  );
};

export default UserActionFooter;
