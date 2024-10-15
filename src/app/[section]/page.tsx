'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import navData from '@/data/nav-data';
import styles from './page.module.scss';
import Button from '@/components/ui/Button/Button';

const NavSection = () => {
  const { section } = useParams();
  const data = navData.find(item => item.tab.page === +section);

  if (!data) {
    notFound();
  }

  return (
    <section className={styles['nav-section']}>
      <div className={styles['nav-section__content']}>
        <h2 className={styles['nav-section__heading']}>{data.heading}</h2>
        <div className={styles['nav-section__content-wrapper']}>
          {data.content}
        </div>
      </div>
      <Button
        onClick={data.actionButton.action}
        className={styles['nav-section__action-btn']}
      >
        {data.actionButton.title}
      </Button>
    </section>
  );
};

export default NavSection;
