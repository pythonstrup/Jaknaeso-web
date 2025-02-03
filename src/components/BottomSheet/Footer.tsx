import type { HTMLAttributes, PropsWithChildren } from 'react';
import cn from 'classnames';

import style from './BottomSheet.module.scss';

export default function BottomSheetFooter({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={cn(style.footer, className)} {...props}>
      {children}
    </div>
  );
}
