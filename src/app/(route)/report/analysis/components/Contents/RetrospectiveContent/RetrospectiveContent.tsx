import { Card } from '@/components/Card';
import { Chip } from '@/components/Chip';

import styles from './RetrospectiveContent.module.scss';

export default function RetrospectiveContent() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className="title3">회고를 자주 남긴 주제는</h2>
        <Chip size="big" color="brand">
          value
        </Chip>
        <h2 className="title3">예요.</h2>
      </div>

      <Card
        count={3}
        date={'2025.02.23'}
        question={'커리어를 향상시킬 수 있는 일자리이지만 가까운 사람들과 멀어져야한다면, 이 일자리를 선택하실 건가요?'}
        answer={'주변 사람과 물리적으로 멀어지더라도, 커리어를 선택한다.'}
        retrospective={
          '가까운 사람들과 물리적으로 멀어지더라도 그 관계가 사라지진 않음. 내 노력에 따라 관계는 달라질 수 있지만 커리어 기회는 원할 때 오는게 아님'
        }
      />
    </div>
  );
}
