import { Card as CardComponent } from '@radix-ui/themes';
import { Accordion, Separator } from 'radix-ui';

import { ArrowDown2Icon as ArrowDownIcon } from '@/assets/icons';

import styles from './Card.module.scss';

import '@radix-ui/themes/styles.css';

interface CardContentsProps {
  question: string;
  answer: string;
  retrospective?: string;
}

interface CardProps extends CardContentsProps {
  date: string;
  hiddenCollapse?: boolean;
  isOpen?: boolean;
  className?: string;
}

const CardContents = ({ question, answer, retrospective }: CardContentsProps) => (
  <div className={styles.cardContents}>
    <div className={styles.question}>
      <h5 className={styles.answer__content}>Q.</h5>
      <h5 className={styles.answer__content}>{question}</h5>
    </div>
    <Separator.Root className={styles.separator} />
    <div className={styles.answer}>
      <h5 className={styles.answer__content}>A.</h5>
      <h5 className={styles.answer__content}>{answer}</h5>
    </div>
    {retrospective && (
      <div className={styles.retrospective}>
        <h3 className={styles.retrospective__title}>회고</h3>
        <p className={styles.retrospective__content}>{retrospective}</p>
      </div>
    )}
  </div>
);

const BasicCard = ({ date, question, answer, retrospective }: CardProps) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className="subtitle3">{date}</h3>
      </div>
      <CardContents question={question} answer={answer} retrospective={retrospective} />
    </div>
  </div>
);

export default function Card({
  date,
  question,
  answer,
  hiddenCollapse = false,
  isOpen = false,
  retrospective,
  className,
}: CardProps) {
  if (hiddenCollapse) {
    return <BasicCard date={date} question={question} answer={answer} />;
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <Accordion.Root type="single" collapsible {...(isOpen ? { defaultValue: 'item-1' } : {})}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger className={styles.trigger}>
            <CardComponent className={styles.wrapper}>
              <Accordion.Header className={styles.header}>
                <div className={styles.date}>
                  <h4 className={styles.cardSubTitle4}>{date}</h4>
                  <ArrowDownIcon width="1.5rem" height="1.5rem" className={styles.icon} />
                </div>
              </Accordion.Header>
              <Accordion.Content className={styles.contents}>
                <CardContents question={question} answer={answer} retrospective={retrospective} />
              </Accordion.Content>
            </CardComponent>
          </Accordion.Trigger>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
