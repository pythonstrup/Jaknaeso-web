import { usePathname } from 'next/navigation';
import { TabNav as RadixNabNav } from '@radix-ui/themes';
import cn from 'classnames';

import styles from './TabNav.module.scss';

interface TabNavProps {
  tabs: Tab[];
  onClick: (href: string) => void;
  className?: string;
}

type Tab = {
  href: string;
  label: string;
};

export default function CustomTabNav({ tabs, onClick, className }: TabNavProps) {
  const currentPath = usePathname();
  const isActive = (targetPath: string) => {
    return currentPath.includes(targetPath);
  };

  return (
    <RadixNabNav.Root className={cn(styles.container)}>
      {tabs.map((tab: Tab) => {
        return (
          <RadixNabNav.Link
            className={styles.tab}
            key={tab.label}
            active={isActive(tab.href)}
            onClick={() => onClick(tab.href)}
          >
            {tab.label}
          </RadixNabNav.Link>
        );
      })}
    </RadixNabNav.Root>
  );
}
