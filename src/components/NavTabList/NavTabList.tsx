import clsx from 'clsx';
import NavTab from './components/NavTab/NavTab';
import { INavTab } from './interfaces/nav-data.interface';
import styles from './NavTabList.module.scss';

interface NavTabListProps {
  navTabs: INavTab[];
  className?: string;
}

const NavTabList = ({ navTabs, className }: NavTabListProps) => {
  return (
    <nav className={clsx(styles['nav-tab-list'], className)}>
      {navTabs.map(navTab => (
        <NavTab
          key={navTab.heading}
          className={styles['nav-tab-list__item']}
          {...navTab}
        />
      ))}
    </nav>
  );
};

export default NavTabList;
