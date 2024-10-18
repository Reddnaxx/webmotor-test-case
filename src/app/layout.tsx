import NavTabList from '@/components/NavTabList/NavTabList';
import navData from '@/data/nav-data';
import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Webmotor case',
  description: 'Тестовое задание для Webmotor',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className="container">
          <aside className="container__sidebar">
            <NavTabList
              navTabs={navData.map(item => item.tab)}
              className="container__nav-tab-list"
            />
          </aside>
          <main className="container__main">{children}</main>
        </div>
      </body>
    </html>
  );
}
