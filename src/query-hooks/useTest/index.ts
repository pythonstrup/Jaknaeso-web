import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import testApis from './api';
import testKeys from './keys';

const useGetTest = (options?: UseQueryOptions) =>
  useQuery({
    queryKey: testKeys.all(),
    queryFn: () => testApis.getTest(),
    ...options,
  });

export { useGetTest };
