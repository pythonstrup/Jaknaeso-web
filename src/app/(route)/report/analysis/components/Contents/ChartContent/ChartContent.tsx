import styles from './ChartContent.module.scss';
import RadarChart from './RadarChart';

export default function ChartContent() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className="title3">가치관 선택 비율</h2>
        <h5 className="subTitle4">userName님은 성장과 평화을 가장 중요시 여기고 있어요.</h5>
      </div>
      <div className={styles.chart}>
        <RadarChart data={[80, 70, 60, 50, 40]} />
      </div>
    </div>
  );
}
