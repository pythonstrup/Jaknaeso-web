import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import memberApis from './api.client';
import memberKeys from './keys';
import type { MemberResponse } from './types';

export const useGetMember = (id: number, options?: UseQueryOptions<MemberResponse, Error>) => {
  return useQuery<MemberResponse, Error>({
    queryKey: memberKeys.detail([id]),
    queryFn: () => memberApis.get(id),
    ...options,
  });
};
export const useMemberMutation = () => {};
