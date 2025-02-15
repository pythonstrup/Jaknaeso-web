'use client';

import { Chip } from '@/components/Chip';
import { CHARACTERS } from '@/constants';
import { useGetLatestCharacter } from '@/query-hooks/useCharacter';

import styles from './Page.module.scss';

export default function HomeTitle() {
  const {
    data = {
      characterNo: '',
      keyword: '',
    },
  } = useGetLatestCharacter();

  const character = data?.keyword ? CHARACTERS[data?.keyword] : null;

  return (
    <>
      {character && (
        <>
          <div className={styles.content}>
            <Chip size="md" color="brand" className={styles.chip}>
              {`${data.characterNo} 캐릭터`}
            </Chip>
            <h1>{character?.content}</h1>
          </div>
          <div className={styles.character}>
            <character.image width={240} height={240} />
          </div>
        </>
      )}
    </>
  );
}
