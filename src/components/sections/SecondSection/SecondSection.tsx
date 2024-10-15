import React from 'react';
import styles from './SecondSection.module.scss';
import Input from '@/components/ui/Input/Input';

const SecondSection = () => {
  return (
    <section className={styles['second-section']}>
      <form className={styles['second-section__form']}>
        <Input
          name="name"
          type="text"
          placeholder="Имя"
          autoComplete="name"
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
        />
        <Input
          name="phone"
          type="tel"
          placeholder="Телефон"
          autoComplete="tel"
          required
        />
      </form>
    </section>
  );
};

export default SecondSection;
