import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { ROUTES } from '@/constants';
import { clearTokens } from '@/libs/cookie/manageCookie.client';
import memberApis from '@/query-hooks/useMember/api';

import styles from './UserActionFooter.module.scss';

type Props = {
  memberId: number;
};

const UserActionFooter = ({ memberId }: Props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

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
      <span className={styles.action} onClick={() => setIsOpen(true)}>
        회원 탈퇴
      </span>
      <Modal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        title="정말 탈퇴하실 건가요?"
        description="회원 탈퇴 시 지금까지 기록한 정보가\n전부 삭제되고 복구가 불가능해요."
      >
        <Modal.Footer className={styles.modalFooter}>
          <Button onClick={() => setIsOpen(false)}>더 써볼게요</Button>
          <Button color="neutral" onClick={withdraw}>
            떠날래요
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserActionFooter;
