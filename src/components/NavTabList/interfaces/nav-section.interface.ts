import { ReactNode } from 'react';
import { INavTab } from './nav-data.interface';
import { INavSectionButton } from './nav-section-button.interface';

export interface INavSection {
  page: number;
  heading: string;
  content: ReactNode;
  actionButton: INavSectionButton
  tab: INavTab;
}
