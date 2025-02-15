import { cache, type PropsWithChildren } from 'react';
import {
  dehydrate,
  HydrationBoundary as HydrateOnClient,
  QueryClient,
  type QueryFunction,
  type QueryKey,
} from '@tanstack/react-query';

type QueryConfig = {
  queryKey: QueryKey;
  queryFn: QueryFunction;
};

type Props = {
  queries: QueryConfig[];
};

const PrefetchMultipleHydration = async ({ queries, children }: PropsWithChildren<Props>) => {
  const getQueryClient = cache(() => new QueryClient());
  const queryClient = getQueryClient();

  await Promise.all(
    queries.map(({ queryKey, queryFn }) =>
      queryClient.prefetchQuery({
        queryKey,
        queryFn,
      }),
    ),
  );

  const dehydratedState = dehydrate(queryClient);

  return <HydrateOnClient state={dehydratedState}>{children}</HydrateOnClient>;
};

export default PrefetchMultipleHydration;
