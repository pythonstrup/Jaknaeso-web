import { Diver } from '@/components/Diver';
import { useGetCharacterReportInfo } from '@/query-hooks/useCharacter';

import styles from './InfoContent.module.scss';
import InfoContentItem from './InfoContentItem';

interface InfoContentProp {
  characterId: string;
}
export default function InfoContent({ characterId }: InfoContentProp) {
  const { data } = useGetCharacterReportInfo(characterId);

  return (
    <>
      {data && (
        <>
          <InfoContentItem title="주요 특징" description={data?.mainTraits.map((value) => value.description)} />
          <Diver className={styles.divider} />
          <InfoContentItem title="강점" description={data?.strengths.map((value) => value.description)} />
          <Diver className={styles.divider} />
          <InfoContentItem title="단점" description={data?.weaknesses.map((value) => value.description)} />
        </>
      )}
    </>
  );
}
