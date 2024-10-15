import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

type InputProps = ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, ...props }, ref) => {
    return (
      <div className={styles['input-wrapper']}>
        <input
          ref={ref}
          placeholder={placeholder}
          className={clsx(styles.input, className)}
          {...props}
        />
        <span className={styles.placeholder}>
          {placeholder}
          {props.required && '*'}
        </span>
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
