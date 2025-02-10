import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
      setMember: (member) => set({ member }),
      getMemberId: () => get().member.memberId,
    }),
    {
      name: 'member',
    },
  ),
);
