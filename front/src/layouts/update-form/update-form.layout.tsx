import React from 'react';
import './update-form.styles.scss'

interface Props {
  children: React.ReactNode;
};

export const UpdateFormLayout: React.FC<Props> = ({children}) => {

  return (
  <main>
    {children}
  </main>
  );
};
