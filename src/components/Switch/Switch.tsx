import { Switch } from 'radix-ui';

import styles from './Switch.module.scss';

interface CustomSwitchProps {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export default function CustomSwitch({ checked, onCheckedChange }: CustomSwitchProps) {
  return (
    <Switch.Root className={styles.switch} checked={checked} onCheckedChange={onCheckedChange}>
      <Switch.Thumb className={styles.switchThumb} />
    </Switch.Root>
  );
}
