import { INavSection } from '@/components/NavTabList/interfaces/nav-section.interface';
import FirstSection from '@/components/sections/FirstSection/FirstSection';
import SecondSection from '@/components/sections/SecondSection/SecondSection';

const navData: INavSection[] = [
  {
    page: 1,
    heading: 'Контент таба 1',
    content: <FirstSection />,
    actionButton: {
      title: 'Кнопка действия',
      action: () => {
        console.log('Кнопка таба 1');
      },
    },
    tab: {
      page: 1,
      heading: 'Заголовок таба 1',
      text: 'Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов ',
    },
  },
  {
    page: 2,
    heading: 'Контент таба 2',
    content: <SecondSection />,
    actionButton: {
      title: 'Кнопка действия',
      action: () => {
        console.log('Кнопка таба 2');
      },
    },
    tab: {
      page: 2,
      heading: 'Заголовок таба 2',
      text: 'Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов ',
    },
  },
  {
    page: 3,
    heading: 'Контент таба 3',
    content: <div>Контент таба 3</div>,
    actionButton: {
      title: 'Кнопка действия',
      action: () => {
        console.log('Кнопка таба 3');
      },
    },
    tab: {
      page: 3,
      heading: 'Заголовок таба 3',
      text: 'Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов ',
    },
  },
];

export default navData;
