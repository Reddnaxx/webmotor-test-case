import navData from '@/data/nav-data';
import { notFound } from 'next/navigation';
import ActionButton from './components/ActionButton';
import styles from './page.module.scss';

export async function generateStaticParams() {
  return navData.map(item => ({
    section: item.tab.page.toString(),
  }));
}

const NavSection = ({ params }: { params: { section: string } }) => {
  const data = navData.find(item => item.tab.page === +params.section);

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
      <ActionButton
        section={params.section}
        className={styles['nav-section__action-btn']}
      />
    </section>
  );
};

export default NavSection;
