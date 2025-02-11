'use client';

import React from 'react';

import { useMemberStore } from '@/stores';

import ProfileCard from './components/ProfileCard';
import UserActionFooter from './components/UserActionFooter';
import UserSettings from '@/app/(route)/mypage/components/UserSettings';

export default function MyPage() {
  const { member } = useMemberStore();
  return (
    <div>
      <ProfileCard member={member} />
      <UserSettings />
      <UserActionFooter memberId={member.memberId} />
    </div>
  );
}
