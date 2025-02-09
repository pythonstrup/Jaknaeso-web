import HomeContent from './Content';
import styles from './Page.module.scss';
import HomeTitle from './Title';

export default function HomePage() {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <HomeTitle />
        <HomeContent />
      </div>
    </div>
  );
}
