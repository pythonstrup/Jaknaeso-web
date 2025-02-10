'use client';

import React from 'react';

import { useMemberStore } from '@/stores';

import ProfileCard from './components/ProfileCard';
import UserActionFooter from './components/UserActionFooter';

export default function MyPage() {
  const { member } = useMemberStore();
  return (
    <div>
      <ProfileCard member={member} />
      <UserActionFooter memberId={member.memberId} />
    </div>
  );
}
