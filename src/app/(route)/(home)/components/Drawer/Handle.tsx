import { ArrowDown2Icon, ArrowUp2Icon } from '@/assets/icons';

import style from './Drawer.module.scss';

interface DrawerHandleProp {
  isOpen: boolean;
  onClick: VoidFunction;
}
export default function DrawerHandle({ isOpen, onClick }: DrawerHandleProp) {
  return (
    <div className={style.handle}>
      {isOpen && <ArrowUp2Icon width={30} height={30} color="#D4D7E2" onClick={onClick} />}
      {!isOpen && <ArrowDown2Icon width={30} height={30} color="#D4D7E2" onClick={onClick} />}
    </div>
  );
}
