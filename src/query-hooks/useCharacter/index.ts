import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import type { CharacterParams, CharacterResponse } from './types';
import characterKeys from './keys';
import characterApis from './api.client';

export const useGetCharacters = (
  params: CharacterParams['get'],
  options?: UseQueryOptions<CharacterResponse, Error>,
) => {
  return useQuery<CharacterResponse, Error>({
    queryKey: [characterKeys.lists()],
    queryFn: () => characterApis.getCharacters(params),
    ...options,
  });
};
