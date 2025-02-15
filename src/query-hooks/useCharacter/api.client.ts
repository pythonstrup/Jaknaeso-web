import { clientApi } from '@/libs/api/api.client';
import { getMemberIdToken } from '@/libs/cookie/manageCookie.client';
import type { ResponseDTO } from '@/types';

import type { CharacterParams, CharacterResponse, LatestCharacterResponse } from './types';

const getCharacters = async (params: CharacterParams['get']) => {
  const res = await clientApi.get<ResponseDTO<CharacterResponse>>(`/api/v1/characters`, { params });
  return res.data.data;
};

const getLatestCharacter = async () => {
  const memberId = await getMemberIdToken();
  const { data } = await clientApi.get<ResponseDTO<LatestCharacterResponse>>('/api/v1/characters/latest', {
    params: { memberId },
  });
  return data.data;
};

const characterServerApis = { getCharacters, getLatestCharacter };

export default characterServerApis;
