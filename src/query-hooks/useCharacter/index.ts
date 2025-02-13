import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import characterApis from './api.client';
import characterKeys from './keys';
import type { CharacterParams, CharacterResponse } from './types';

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
