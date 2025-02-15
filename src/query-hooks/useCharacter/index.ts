import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import characterApis from './api.client';
import characterKeys from './keys';
import type { CharacterParams, CharacterResponse, LatestCharacterResponse } from './types';

const useGetCharacters = (params: CharacterParams['get'], options?: UseQueryOptions<CharacterResponse, Error>) => {
  return useQuery<CharacterResponse, Error>({
    queryKey: [characterKeys.lists()],
    queryFn: () => characterApis.getCharacters(params),
    ...options,
  });
};

const useGetLatestCharacter = (options?: UseQueryOptions<LatestCharacterResponse, Error>) => {
  return useQuery<LatestCharacterResponse, Error>({
    queryKey: [characterKeys.detail(['latest'])],
    queryFn: () => characterApis.getLatestCharacter(),
    ...options,
  });
};

export { useGetCharacters, useGetLatestCharacter };
