'use client';

import { useRouter } from 'next/navigation';

import { ArrowLeft2Icon } from '@/assets/icons';
import { ROUTES } from '@/constants';

import styles from './page.module.scss';

export default function TermPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push(ROUTES.mypage);
  };

  return (
    <div className={styles.container}>
      <ArrowLeft2Icon className={styles.icon} width={48} height={48} onClick={handleBack} />
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>개인정보 처리방침</h2>
      </div>
      <div className={styles.content}>
        <h3>1. 개인정보 수집 항목</h3>
        <p>당사는 회원가입 과정에서 다음과 같은 개인정보를 수집합니다:</p>
        <ul>
          <li>이름</li>
          <li>이메일 주소</li>
        </ul>
      </div>
      <div className={styles.content}>
        <h3>2. 개인정보 수집 목적</h3>
        <p>수집한 개인정보는 다음 목적으로 사용됩니다:</p>
        <ul>
          <li>회원 계정 생성 및 서비스 이용 제공</li>
          <li>고객 지원 및 문의 응대</li>
          <li>서비스 관련 중요 공지 사항 전달</li>
        </ul>
      </div>
      <div className={styles.content}>
        <h3>3. 개인정보 보관 기간</h3>
        <p>
          당사는 회원 탈퇴 시 또는 법령에 따른 보관 기간이 만료되면 즉시 개인정보를 삭제합니다. 단, 관련 법령에 의해
          일정 기간 동안 보관이 필요한 경우, 해당 기간 동안 정보를 안전하게 보관합니다.
        </p>
      </div>
      <div className={styles.content}>
        <h3>4. 개인정보 보호 및 보안 조치</h3>
        <p>당사는 다음과 같은 보안 조치를 통해 개인정보를 보호합니다:</p>
        <ul>
          <li>암호화된 데이터 저장: 사용자의 개인정보는 암호화하여 안전하게 저장됩니다.</li>
          <li>보안 프로토콜 적용: 네트워크를 통한 데이터 전송 시 보안 프로토콜(SSL/TLS) 적용</li>
          <li>접근 권한 제한: 개인정보 접근 권한을 최소화하여 관리</li>
        </ul>
      </div>
      <div className={styles.content}>
        <h3>5. 개인정보 제공 및 공유</h3>
        <p>
          당사는 사용자의 개인정보를 제3자에게 제공하거나 공유하지 않습니다. 단, 법적 요구가 있을 경우, 관련 법령에 따라
          제공될 수 있습니다.
        </p>
      </div>
      <div className={styles.content}>
        <h3>6. 이용자의 권리</h3>
        <p>
          이용자는 언제든지 자신의 개인정보를 확인, 수정, 삭제 요청할 수 있습니다. 개인정보 관련 문의는 아래 이메일을
          통해 가능합니다.
        </p>
      </div>
      <div className={styles.content}>
        <h3>7. 연락처</h3>
        <p>개인정보 보호 관련 문의 사항이 있으시면 아래 이메일로 문의해 주세요. 📧 이메일: app.jaknaeso@gmail.com</p>
      </div>
    </div>
  );
}
