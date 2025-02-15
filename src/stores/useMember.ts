import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { setMemberIdToken } from '@/libs/cookie/manageCookie.client';

interface MemberState {
  name: string;
  email: string;
  memberId: number;
}

interface MemberStoreState {
  member: MemberState;
  setMember: (member: MemberState) => void;
  getMemberId: () => number;
}

export const useMemberStore = create(
  persist<MemberStoreState>(
    (set, get) => ({
      member: {
        name: '',
        email: '',
        memberId: 0,
      },
      setMember: (member) => {
        set({ member });
        setMemberIdToken(String(member.memberId ?? 0));
      },
      getMemberId: () => get().member.memberId,
    }),
    {
      name: 'member',
    },
  ),
);
