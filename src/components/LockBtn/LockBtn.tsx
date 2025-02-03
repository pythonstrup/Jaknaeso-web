import type { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import { CheckIcon, LockIcon } from '@/assets/icons';

import styles from './LockBtn.module.scss';
interface LockBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'completed' | 'default' | 'completedToday';
}

const OPTIONS = {
  disabled: {
    icon: LockIcon,
    iconColor: '#D4D7E2',
  },
  completed: {
    icon: CheckIcon,
    iconColor: '#8C909C',
  },
  default: {
    icon: LockIcon,
    iconColor: '#3F78FF',
  },
  completedToday: {
    icon: CheckIcon,
    iconColor: '#3F78FF',
  },
};

export default function LockBtn({ label, variant = 'default', disabled, ...props }: LockBtnProps) {
  const type = disabled ? 'disabled' : variant;
  const item = OPTIONS[type];
  return (
    <div className={cn(styles[`container-${type}`], styles.container)}>
      <button className={cn(styles[`color-${type}`], styles.button)} {...props}>
        <item.icon width={28} height={28} color={item.iconColor} />
      </button>
      <span>{label}</span>
    </div>
  );
}
