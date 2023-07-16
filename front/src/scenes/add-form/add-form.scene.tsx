import React from 'react';
import { AddFormLayout } from '@/layouts';
import './add-form.styles.scss';

interface Props {
    children: React.ReactNode;
};

export const AddFormScene: React.FC<Props> = ({children}) => {

  return (
    <AddFormLayout>
        {children}
    </AddFormLayout>
  )
}
