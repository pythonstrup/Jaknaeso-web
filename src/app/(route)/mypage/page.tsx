'use client';

import React from 'react';

import ProfileCard from './components/ProfileCard';
import UserActionFooter from './components/UserActionFooter';
import UserSettings from './components/UserSettings';

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
      <ProfileCard member={member} />
      <UserSettings />
      <UserActionFooter memberId={member.memberId} />
    </div>
  );
}
