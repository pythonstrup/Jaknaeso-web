import React from 'react';
import { useRouter } from 'next/navigation';

import { ROUTES } from '@/constants';
import { clearTokens } from '@/libs/cookie/manageCookie.client';
import memberApis from '@/query-hooks/useMember/api';

import styles from './UserActionFooter.module.scss';

type Props = {
  memberId: number;
};

const UserActionFooter = ({ memberId }: Props) => {
  const router = useRouter();

  const logout = () => {
    clearTokens();
    router.push(ROUTES.login);
  };
  const withdraw = async () => {
    await memberApis.withdraw(memberId);
    logout();
  };
  return (
    <div className={styles.actionsContainer}>
      <span className={styles.action} onClick={logout}>
        로그아웃
      </span>
      <span className={styles.action} onClick={withdraw}>
        회원 탈퇴
      </span>
    </div>
  );
};

export default UserActionFooter;
