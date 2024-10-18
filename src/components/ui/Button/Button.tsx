'use client';

import clsx from 'clsx';
import { ComponentProps, FC } from 'react';
import styles from './Button.module.scss';

type ButtonProps = ComponentProps<'button'>;

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
