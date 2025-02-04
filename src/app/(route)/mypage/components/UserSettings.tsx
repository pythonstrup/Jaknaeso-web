import React, { useState } from 'react';
import styles from './UserSettings.module.scss';
import { ArrowRightIcon as ArrowRightIcon } from '@/assets/icons';
import { Switch } from '@/components/Switch';

const Settings: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleNotificationSwitch = () => {
    setNotificationsEnabled((prev) => !prev);
    console.log(`알림 설정: ${!notificationsEnabled}`);
  };

  const handleTerms = () => {
    console.log('이용 약관 클릭');
  };

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.settingItem}>
        <span>알림 설정</span>
        <Switch checked={notificationsEnabled} onCheckedChange={handleNotificationSwitch} />
      </div>

      <div className={styles.settingItem} onClick={handleTerms}>
        <span className={styles.settingLink}>이용 약관</span>
        <ArrowRightIcon className={styles.arrow} />
      </div>
    </div>
  );
};

export default Settings;
