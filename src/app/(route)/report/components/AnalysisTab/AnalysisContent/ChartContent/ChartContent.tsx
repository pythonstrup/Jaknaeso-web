import { CHARACTERS } from '@/constants';
import { useGetCharacterAnalysis } from '@/query-hooks/useCharacter';
import type { CharacterReports } from '@/query-hooks/useCharacter/types';
import { useMemberStore } from '@/stores';

import styles from './ChartContent.module.scss';
import RadarChart from './RadarChart';

export default function ChartContent({ characterId }: { characterId: string }) {
  const { data } = useGetCharacterAnalysis(characterId);
  const { member } = useMemberStore();

  const getChartData = (reports: CharacterReports[]) => {
    const labels = reports.map((report) => CHARACTERS[report.keyword].label);
    const percentages = reports.map((report) => report.percentage);
    const maxIdx = percentages
      .map((value, index) => ({ value, index }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 3)
      .map((item) => item.index);
    const maxLabels = maxIdx.map((index) => labels[index]);

    return { labels, percentages, maxIdx, maxLabels };
  };
  const maxLabels = data ? getChartData(data.valueReports).maxLabels : ['', ''];

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className="title3">가치관 선택 비율</h2>
        <h5 className="subTitle4">{`${member.name}님은 ${maxLabels[0]}와/과 ${maxLabels[1]}을 가장 중요시 여기고 있어요.`}</h5>
      </div>

      {data && (
        <div className={styles.chart}>
          <RadarChart
            labels={getChartData(data.valueReports).labels}
            data={getChartData(data.valueReports).percentages}
            maxIdx={getChartData(data.valueReports).maxIdx}
          />
        </div>
      )}
    </div>
  );
}
