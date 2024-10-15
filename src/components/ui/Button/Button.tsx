import React, { ComponentProps, FC } from 'react';
import clsx from 'clsx';
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
