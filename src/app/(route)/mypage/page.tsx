'use client';

import React from 'react';
import UserActionFooter from './components/UserActionFooter';

type Member = {
  memberId: number;
  name: string;
  email: string;
};

export default function MyPage() {
  const mock = { memberId: 1, name: '홍길동', email: 'hong@naver.com' };
  const [member, setMember] = React.useState<Member>(mock);

  return (
    <div>
      <UserActionFooter memberId={member.memberId} />
    </div>
  );
}
