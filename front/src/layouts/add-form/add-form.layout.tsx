import React from 'react';
import './add-form.styles.scss';

interface Props {
    children: React.ReactNode;
};

export const AddFormLayout: React.FC<Props> = ({children}) => {

  return (
    <main>
        {children}
    </main>
  )
}
