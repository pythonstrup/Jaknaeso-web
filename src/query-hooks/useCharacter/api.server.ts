import { serverApi } from '@/libs/api/api.server';
import { getMemberIdToken, setCharacterId } from '@/libs/cookie/manageCookie.server';
import type { ResponseDTO } from '@/types';

import type {
  CharacterAnalysisResponse,
  CharacterReportInfoResponse,
  CharacterResponse,
  LatestCharacterResponse,
} from './types';

const getCharacters = async () => {
  const memberId = await getMemberIdToken();
  const { data } = await serverApi.get<ResponseDTO<CharacterResponse>>('/api/v1/characters', {
    params: { memberId },
  });
  return data.data;
};

const getLatestCharacter = async () => {
  const memberId = await getMemberIdToken();
  const { data } = await serverApi.get<ResponseDTO<LatestCharacterResponse>>('/api/v1/characters/latest', {
    params: { memberId },
  });
  setCharacterId(String(data.data.characterId));
  return data.data;
};

const getCharacterAnalysis = async (characterId: string) => {
  const memberId = await getMemberIdToken();
  const { data } = await serverApi.get<ResponseDTO<CharacterAnalysisResponse>>(
    `/api/v1/characters/${characterId}/report`,
    {
      params: { memberId },
    },
  );
  return data.data;
};

const getCharacterReportInfo = async (characterId: string) => {
  const memberId = await getMemberIdToken();
  const { data } = await serverApi.get<ResponseDTO<CharacterReportInfoResponse>>(`/api/v1/characters/${characterId}`, {
    params: { memberId },
  });
  return data.data;
};

const characterServerApis = { getCharacters, getLatestCharacter, getCharacterAnalysis, getCharacterReportInfo };

export default characterServerApis;
