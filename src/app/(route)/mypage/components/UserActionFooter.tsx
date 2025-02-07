import React from 'react';

import styles from './UserActionFooter.module.scss';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants';
import memberApis from '@/query-hooks/useMember/api';

type Props = {
  memberId: number;
};

const UserActionFooter = ({ memberId }: Props) => {
  const router = useRouter();

  const handleLogout = () => {};
  const handleWithdraw = async () => {
    await memberApis.withdraw(memberId);
    router.push(ROUTES.login);
  };
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
