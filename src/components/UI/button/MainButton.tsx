import React, { MouseEvent } from 'react';

import cl from './MainButton.module.scss';

interface MainButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const MainButton: React.FC<MainButtonProps> = ({ children, ...props }) => {
  const rootClass = [cl.btn];

  if (props.className) {
    const classes = props.className.split(' ');

    for (const c of classes) {
      rootClass.push(cl[c]);
    }
  }

  return (
    <button {...props} className={rootClass.join(' ')}>
      {children}
    </button>
  );
};

export default MainButton;
