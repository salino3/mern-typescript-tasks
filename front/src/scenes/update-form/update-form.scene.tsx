import React from 'react';
import { UpdateFormLayout } from '@/layouts';
import './update-form.styles.scss';

interface Props {
    children: React.ReactNode;
};

export const UpdateFormScene: React.FC<Props> = ({children}) => {
  return (
  <UpdateFormLayout>
    {children}
  </UpdateFormLayout>
  );
}
