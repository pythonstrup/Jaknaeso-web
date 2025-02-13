import { TabNav } from '@/components/TabNav';
import { ROUTES } from '@/constants';

const TABS = [
  {
    href: ROUTES.reportAnalysis,
    label: '캐릭터 분석',
  },
  {
    href: ROUTES.reportQuestions,
    label: '나의 답변 모아보기',
  },
];

const CharacterTabNav = () => {
  return <TabNav tabs={TABS} />;
};

export default CharacterTabNav;
