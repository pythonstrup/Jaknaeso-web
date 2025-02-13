import { forwardRef } from 'react';
import { Card as CardComponent } from '@radix-ui/themes';
import cn from 'classnames';
import { Accordion, Separator } from 'radix-ui';

import { ArrowDown2Icon as ArrowDownIcon } from '@/assets/icons';

import { Chip } from '../Chip';

import styles from './Card.module.scss';

interface CardContentsProps {
  question: string;
  answer: string;
  retrospective?: string;
}

interface CardProps extends CardContentsProps {
  date: string;
  count: number;
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

const BasicCard = ({ count, date, question, answer, retrospective }: CardProps) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className="subtitle3">{count}회차</h3>
      </div>
      <Chip size="sm" color="neutral" className={styles.chip}>
        {date}
      </Chip>
      <CardContents question={question} answer={answer} retrospective={retrospective} />
    </div>
  </div>
);

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ count, date, question, answer, hiddenCollapse = false, isOpen = false, retrospective, className }, ref) => {
    if (hiddenCollapse) {
      return <BasicCard count={count} date={date} question={question} answer={answer} />;
    }

    return (
      <div ref={ref} className={cn(styles.container, className)}>
        <Accordion.Root type="single" collapsible {...(isOpen ? { defaultValue: 'item-1' } : {})}>
          <Accordion.Item value="item-1">
            <Accordion.Trigger className={styles.trigger}>
              <CardComponent className={styles.wrapper}>
                <Accordion.Header className={styles.header}>
                  <div className={styles.date}>
                    <h4 className={styles.cardSubTitle4}>{count}회차</h4>
                    <ArrowDownIcon width="1.5rem" height="1.5rem" className={styles.icon} />
                  </div>
                </Accordion.Header>
                <Accordion.Content className={styles.contents}>
                  <Chip size="sm" color="neutral" className={styles.chip}>
                    {date}
                  </Chip>
                  <CardContents question={question} answer={answer} retrospective={retrospective} />
                </Accordion.Content>
              </CardComponent>
            </Accordion.Trigger>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    );
  },
);

Card.displayName = 'Card';

export default Card;
