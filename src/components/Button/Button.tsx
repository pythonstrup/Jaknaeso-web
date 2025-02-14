import { type ButtonHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'neutral';
  size?: 'sm' | 'full-width';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = 'primary', size = 'full-width', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(styles.button, styles[`color-${color}`], size === 'sm' && styles.size_sm, className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
