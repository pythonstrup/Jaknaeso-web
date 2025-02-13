import { Diver } from '@/components/Diver';

import { CharacterContent } from '../Contents/CharacterContent';
import { ChartContent } from '../Contents/ChartContent';
import { RetrospectiveContent } from '../Contents/RetrospectiveContent';

import styles from './Page.module.scss';

export default function ReportAnalysisPage() {
  return (
    <div className={styles.container}>
      <CharacterContent />
      <Diver className={styles.divider} />
      <ChartContent />
      <Diver className={styles.divider} />
      <RetrospectiveContent />
    </div>
  );
}
