'use client';

import { useState } from 'react';

import CharacterSelectLayout from '@/app/(route)/report/components/CharacterSelectLayout';
import { Diver } from '@/components/Diver';
import { useGetCharacters } from '@/query-hooks/useCharacter';
import type { CharacterItem } from '@/query-hooks/useCharacter/types';
import { useMemberStore } from '@/stores';

import { CharacterContent } from '../Contents/CharacterContent';
import { ChartContent } from '../Contents/ChartContent';
import { RetrospectiveContent } from '../Contents/RetrospectiveContent';

import styles from './Page.module.scss';

export default function ReportAnalysisPage() {
  const { data: characterData = { characters: [] } } = useGetCharacters({ memberId: useMemberStore().getMemberId() });
  const [open, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterItem>(
    characterData.characters.at(0) ?? { ordinalNumber: 0, bundleId: 0 },
  );

  const handleCharacter = (character: CharacterItem) => {
    setSelectedCharacter(character);
    setOpen(false);
  };

  return (
    <CharacterSelectLayout
      open={open}
      selectedCharacter={selectedCharacter}
      characters={characterData.characters}
      onButtonClick={() => setOpen(true)}
      onCloseSheet={() => setOpen(false)}
      onSelect={handleCharacter}
    >
      <div className={styles.container}>
        <CharacterContent />
        <Diver className={styles.divider} />
        <ChartContent />
        <Diver className={styles.divider} />
        <RetrospectiveContent />
      </div>
    </CharacterSelectLayout>
  );
}
