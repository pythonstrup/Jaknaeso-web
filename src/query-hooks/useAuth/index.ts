import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import { ROUTES } from '@/constants';
import { setTokens } from '@/libs/cookie/manageCookie.client';
import { useMemberStore } from '@/stores';

import memberApis from '../useMember/api.client';
import characterApis from '../useCharacter/api.client';

import authApis from './api';
import { useCharacterStore } from '@/stores/useCharacter';

export const useAuthMutation = () => {
  const router = useRouter();
  const { setMember } = useMemberStore();
  const { setCharacter } = useCharacterStore();
  const postKakaoAuth = useMutation({
    mutationFn: authApis.postKakao,
    onSuccess: (res) => {
      setTokens(res.accessToken, res.refreshToken);
      router.push(ROUTES.home);
      memberApis.get(res.memberId).then((member) => {
        setMember({
          ...member,
          memberId: res.memberId,
        });
      });
      characterApis.getCharacters({ memberId: res.memberId }).then((res) => {
        const character = res.characters.at(0) ?? { ordinalNumber: 0, bundleId: 0 };
        setCharacter({ ...character });
      });
    },
  });
  const postAppleAuth = useMutation({
    mutationFn: authApis.postApple,
    onSuccess: (res) => {
      setTokens(res.accessToken, res.refreshToken);
      router.push(ROUTES.home);
      memberApis.get(res.memberId).then((member) => {
        setMember({
          ...member,
          memberId: res.memberId,
        });
      });
      characterApis.getCharacters({ memberId: res.memberId }).then((res) => {
        const character = res.characters.at(0) ?? { ordinalNumber: 0, bundleId: 0 };
        setCharacter({ ...character });
      });
    },
  });

  return { postKakaoAuth, postAppleAuth };
};
