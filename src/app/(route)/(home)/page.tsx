import { LockBtn } from '@/components/LockBtn';

export default function Home() {
  return (
    <div>
      홈 페이지
      <LockBtn label="1회차" />
      <LockBtn label="1회차" disabled />
      <LockBtn label="1회차" variant="completed" />
      <LockBtn label="1회차" variant="completedToday" />
    </div>
  );
}
