'use client';

import { Skeleton } from '@radix-ui/themes';

import { Chip } from '@/components/Chip';
import { LottieAnimation } from '@/components/LottieAnimation';
import { CHARACTERS } from '@/constants';
import { useGetLatestCharacter } from '@/query-hooks/useCharacter';

import styles from './Page.module.scss';

export default function HomeTitle() {
  const {
    data = {
      characterNo: '',
      characterType: '',
    },
    isLoading,
  } = useGetLatestCharacter();

  const character = data?.characterType ? CHARACTERS[data?.characterType] : null;

  return (
    <>
      <div className={styles.content}>
        <Skeleton loading={isLoading}>
          <Chip size="md" color="brand" className={styles.chip}>
            {`${data.characterNo} 캐릭터`}
          </Chip>
        </Skeleton>
        <Skeleton loading={isLoading}>
          <h1>{character?.content}</h1>
        </Skeleton>
      </div>
      <div className={styles.character}>
        {isLoading || (!character && <Skeleton width="240px" height="240px" />)}
        {!isLoading && character && <LottieAnimation type={character?.type} width="240px" height="240px" />}
      </div>
    </>
  );
}
