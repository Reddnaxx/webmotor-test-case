'use client';

import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { INavTab } from '../../interfaces/nav-data.interface';
import styles from './NavTab.module.scss';

type NavTabProps = INavTab & { className?: string };

const NavTab = ({ page, heading, text, className }: NavTabProps) => {
  const pathname = usePathname();

  const isActive = pathname === `/${page}`;

  return (
    <Link
      href={`/${page}`}
      className={clsx(
        styles['nav-tab'],
        isActive && styles['nav-tab_active'],
        className
      )}
    >
      <div className={styles['nav-tab__header']}>
        <h2 className={styles['nav-tab__heading']}>{heading}</h2>
        <div className={styles['nav-tab__arrow']} />
      </div>
      <p className={styles['nav-tab__text']}>{text}</p>
    </Link>
  );
};

export default NavTab;
