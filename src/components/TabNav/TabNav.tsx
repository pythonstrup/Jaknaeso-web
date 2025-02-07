import { usePathname } from 'next/navigation';
import { TabNav } from '@radix-ui/themes';
import cn from 'classnames';

import styles from './TabNav.module.scss';

interface CustomTabNavProps {
  tabs: Tab[];
  className?: string;
}

type Tab = {
  href: string;
  label: string;
};

export default function CustomTabNav({ tabs, className }: CustomTabNavProps) {
  const currentPath = usePathname();
  const isActive = (targetPath: string) => {
    return currentPath.includes(targetPath);
  };

  return (
    <TabNav.Root className={cn(styles.container)}>
      {tabs.map((tab: Tab) => {
        return (
          <TabNav.Link className={styles.tab} href={tab.href} key={tab.label} active={isActive(tab.href)}>
            {tab.label}
          </TabNav.Link>
        );
      })}
    </TabNav.Root>
  );
}
