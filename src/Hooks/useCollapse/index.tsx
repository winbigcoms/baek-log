import { useState } from 'react';

export const useCollapse = (): [boolean, () => void] => {
  const [isCollapsed, setCollapse] = useState(false);

  const changeCollapse = () => {
    setCollapse(state => !state);
  };

  return [isCollapsed, changeCollapse];
};
