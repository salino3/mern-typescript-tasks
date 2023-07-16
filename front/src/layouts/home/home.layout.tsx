import React from 'react';
import './home.styles.scss';

interface Props {
    children: React.ReactNode;
};

export const HomeLayout: React.FC<Props> = ({children}) => {
  return (
    <main>
     {children}
    </main>
    );
};
