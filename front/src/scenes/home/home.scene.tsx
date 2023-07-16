import React from 'react';
import { HomeLayout } from '../../layouts';
import './home.styles.scss';

interface Props {
    children: React.ReactNode;
}

export const HomeScene: React.FC<Props> = ({children}) => {

  return (
    <HomeLayout>
        {children}
    </HomeLayout>
  )
}
