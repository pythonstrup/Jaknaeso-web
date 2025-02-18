import styles from './InfoContent.module.scss';

interface InfoItemProps {
  title: string;
  description: string[];
}
export default function InfoContentItem({ title, description }: InfoItemProps) {
  return (
    <div className={styles.container}>
      <h2 className="title3">{title}</h2>
      <ul>
        {description.map((value, index) => (
          <li key={index} className="subTitle2">
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
