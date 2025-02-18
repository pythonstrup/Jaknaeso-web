import { useRouter, useSearchParams } from 'next/navigation';
import { Tabs as RadixTabs } from 'radix-ui';

import styles from './Tabs.module.scss';

import '@radix-ui/themes/styles.css';

type Tab = {
  href: string;
  label: string;
};

interface TabProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabProps) {
  const searchParam = useSearchParams();
  const baseQuery = searchParam.toString().split('&')[0];
  const activeTab = tabs.find((tab) => tab.href.includes(baseQuery))?.href || tabs[0]?.href;

  const router = useRouter();
  const handleRouter = (href: string) => {
    router.push(href);
  };

  return (
    <RadixTabs.Root className={styles.root} value={activeTab}>
      <RadixTabs.List className={styles.list}>
        {tabs.map((tab) => (
          <RadixTabs.Trigger
            className={styles.trigger}
            key={tab.label}
            value={tab.href}
            onClick={() => handleRouter(tab.href)}
          >
            {tab.label}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
    </RadixTabs.Root>
  );
}
