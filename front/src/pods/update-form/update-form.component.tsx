import React from 'react';
import { useParams } from 'react-router-dom';
import { UpdateFormScene } from '@/scenes/update-form';
import './update-form.styles.scss';

export const UpdateForm: React.FC = () => {

  const params = useParams();

  return (
    <UpdateFormScene>
        update-form.component - {params?.id}
    </UpdateFormScene>
  )
}
