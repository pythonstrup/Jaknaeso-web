import { Skeleton } from '@radix-ui/themes';

import { Chip } from '@/components/Chip';
import { LottieAnimation } from '@/components/LottieAnimation';
import { CHARACTERS } from '@/constants';
import { useGetCharacterReportInfo } from '@/query-hooks/useCharacter';
import { formatDateRange } from '@/utils';

import styles from './CharacterContent.module.scss';

interface CharacterContentProp {
  characterId: string;
}
export default function CharacterContent({ characterId }: CharacterContentProp) {
  const { data, isLoading } = useGetCharacterReportInfo(characterId);

  const character = data?.characterType ? CHARACTERS[data?.characterType] : null;
  return (
    <div className={styles.container}>
      {isLoading ? (
        <Skeleton loading={isLoading} width="280px" height="280px" />
      ) : (
        <LottieAnimation type={character?.type ?? 'none'} width="280px" height="280px" />
      )}

      <div className={styles.content}>
        <Skeleton loading={isLoading}>
          <h2 className="title03">{data?.name ?? ''}</h2>
        </Skeleton>
        <Skeleton loading={isLoading}>
          <Chip size="sm" color="neutral">
            {formatDateRange(data?.startDate ?? '', data?.endDate ?? '')}
          </Chip>
        </Skeleton>
        <Skeleton loading={isLoading}>
          <h5>{data?.description}</h5>
        </Skeleton>
      </div>
    </div>
  );
}
