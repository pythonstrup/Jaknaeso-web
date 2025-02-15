import { serverApi } from '@/libs/api/api.server';
import { getMemberIdToken } from '@/libs/cookie/manageCookie.server';
import type { ResponseDTO } from '@/types';

import type { CharacterParams, CharacterResponse, LatestCharacterResponse } from './types';

const getCharacters = async (params: CharacterParams['get']) => {
  const res = await serverApi.get<ResponseDTO<CharacterResponse>>('/api/v1/characters', { params });
  return res.data.data;
};

const getLatestCharacter = async () => {
  const memberId = await getMemberIdToken();
  const { data } = await serverApi.get<ResponseDTO<LatestCharacterResponse>>('/api/v1/characters/latest', {
    params: { memberId },
  });
  return data.data;
};
const characterServerApis = { getCharacters, getLatestCharacter };

export default characterServerApis;
