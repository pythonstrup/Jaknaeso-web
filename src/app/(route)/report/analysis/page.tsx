'use client';

import { useEffect, useState } from 'react';

import { useGetCharacters } from '@/query-hooks/useCharacter';
import type { CharacterItem } from '@/query-hooks/useCharacter/types';
import { useMemberStore } from '@/stores';

import CharacterSelectLayout from '../components/CharacterSelectLayout';

import { ReportAnalysisPage } from './components/Page';

export default function ReportAnalysis() {
  const { data: characterData = { characters: [] } } = useGetCharacters({ memberId: useMemberStore().getMemberId() });
  const [open, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterItem>({ ordinalNumber: 0, bundleId: 0 });

  const handleCharacter = (character: CharacterItem) => {
    setSelectedCharacter(character);
    setOpen(false);
  };

  useEffect(() => {
    if (characterData && characterData.characters.length > 0) {
      setSelectedCharacter(characterData.characters[0]);
    }
  }, [characterData]);

  return (
    <CharacterSelectLayout
      open={open}
      selectedCharacter={selectedCharacter}
      characters={characterData.characters}
      onButtonClick={() => setOpen(true)}
      onCloseSheet={() => setOpen(false)}
      onSelect={handleCharacter}
    >
      <ReportAnalysisPage />
    </CharacterSelectLayout>
  );
}
