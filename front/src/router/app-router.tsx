import React from 'react';
import { Routes, Route } from "react-router-dom";
import { AddForm, Home, UpdateForm } from '@/pods';
import { SwitchRoutes } from './interface';


export const AppRouter: React.FC = () => {

  return (
    <Routes>
      <Route path={SwitchRoutes.root} element={<Home />} />
      <Route path={SwitchRoutes.new} element={<AddForm />} />
      <Route path={`${SwitchRoutes.update}/:id`} element={<UpdateForm />} />
    </Routes>
  );
}
