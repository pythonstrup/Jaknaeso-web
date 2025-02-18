import { Card } from '@/components/Card';
import { Chip } from '@/components/Chip';
import { useGetSubmissions } from '@/query-hooks/useSurvey';
import { formatDate } from '@/utils';

import styles from './RetrospectiveContent.module.scss';

export default function RetrospectiveContent({ bundleId }: { bundleId: string }) {
  const { data: submissionData = { surveyRecords: [] }, isLoading } = useGetSubmissions(String(bundleId));

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className="title3">회고를 자주 남긴 주제는</h2>
        <Chip size="big" color="brand">
          value
        </Chip>
        <h2 className="title3">예요.</h2>
      </div>

      <div className={styles.contentContainer}>
        {submissionData.surveyRecords.map((question, index) => (
          <Card
            key={question.submissionId}
            count={index + 1}
            date={formatDate(question.submittedAt)}
            question={question.question}
            answer={question.answer}
            isOpen={true}
            retrospective={question.retrospective}
            className={styles.card}
          />
        ))}
      </div>
    </div>
  );
}
