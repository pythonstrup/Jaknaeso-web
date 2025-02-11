import React, { useState } from 'react';

import { ArrowRightIcon as ArrowRightIcon } from '@/assets/icons';

import styles from './UserSettings.module.scss';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants';

const UserSettings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const router = useRouter();

  const handleNotificationSwitch = () => {
    setNotificationsEnabled((prev) => !prev);
    console.log(`알림 설정: ${!notificationsEnabled}`);
  };

  const handleTerms = () => {
    router.push(ROUTES.term);
  };

  return (
    <div className={styles.settingsContainer}>
      {/*<div className={styles.settingItem}>*/}
      {/*  <span>알림 설정</span>*/}
      {/*  <Switch checked={notificationsEnabled} onCheckedChange={handleNotificationSwitch} />*/}
      {/*</div>*/}

      <div className={styles.settingItem} onClick={handleTerms}>
        <span className={styles.settingLink}>이용 약관</span>
        <ArrowRightIcon className={styles.arrow} />
      </div>
    </div>
  );
};

export default UserSettings;
