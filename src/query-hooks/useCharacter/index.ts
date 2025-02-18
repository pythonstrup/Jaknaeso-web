import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import characterApis from './api.client';
import characterKeys from './keys';
import type {
  CharacterAnalysisResponse,
  CharacterReportInfoResponse,
  CharacterResponse,
  LatestCharacterResponse,
} from './types';

const useGetCharacters = (options?: UseQueryOptions<CharacterResponse, Error>) => {
  return useQuery<CharacterResponse, Error>({
    queryKey: characterKeys.lists(),
    queryFn: () => characterApis.getCharacters(),
    ...options,
  });
};

const useGetLatestCharacter = (options?: UseQueryOptions<LatestCharacterResponse, Error>) => {
  return useQuery<LatestCharacterResponse, Error>({
    queryKey: characterKeys.detail(['latest']),
    queryFn: () => characterApis.getLatestCharacter(),
    ...options,
  });
};

const useGetCharacterAnalysis = (characterId: string, options?: UseQueryOptions<CharacterAnalysisResponse, Error>) => {
  return useQuery<CharacterAnalysisResponse, Error>({
    queryKey: characterKeys.detail(['analysis', characterId]),
    queryFn: () => characterApis.getCharacterAnalysis(characterId),
    ...options,
  });
};

const useGetCharacterReportInfo = (
  characterId: string,
  options?: UseQueryOptions<CharacterReportInfoResponse, Error>,
) => {
  return useQuery<CharacterReportInfoResponse, Error>({
    queryKey: characterKeys.detail(['info', characterId]),
    queryFn: () => characterApis.getCharacterReportInfo(characterId),
    ...options,
  });
};

export { useGetCharacterAnalysis, useGetCharacterReportInfo, useGetCharacters, useGetLatestCharacter };
