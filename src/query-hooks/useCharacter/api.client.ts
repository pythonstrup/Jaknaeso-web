import { clientApi } from '@/libs/api/api.client';
import type { ResponseDTO } from '@/types';
import type { CharacterParams, CharacterResponse } from './types';

const getCharacters = async (params: CharacterParams['get']) => {
  const res = await clientApi.get<ResponseDTO<CharacterResponse>>(`/api/v1/characters`, { params });
  return res.data.data;
};

const characterServerApis = { getCharacters };

export default characterServerApis;
