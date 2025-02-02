import { forwardRef, type TextareaHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Textfield.module.scss';

const Textfield = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return <textarea ref={ref} className={cn(styles.textarea, className)} {...props} />;
  },
);

Textfield.displayName = 'Textfield';

export default Textfield;
