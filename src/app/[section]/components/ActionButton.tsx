'use client';

import Button from '@/components/ui/Button/Button';
import navData from '@/data/nav-data';

type ActionButtonProps = {
  section: string;
  className?: string;
};

const ActionButton = ({ section, className }: ActionButtonProps) => {
  const data = navData.find(item => item.tab.page === +section);

  if (!data) {
    return null;
  }

  return (
    <Button onClick={data.actionButton.action} className={className}>
      {data.actionButton.title}
    </Button>
  );
};

export default ActionButton;
