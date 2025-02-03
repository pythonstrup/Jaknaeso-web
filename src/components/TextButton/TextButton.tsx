import { type ButtonHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

import styles from './TextButton.module.scss';

const TextButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <button ref={ref} type="button" className={cn(styles.button, className)} {...props}>
        {children}
      </button>
    );
  },
);

TextButton.displayName = 'TextButton';

export default TextButton;
