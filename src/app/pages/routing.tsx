import { Route, Routes } from 'react-router-dom';
import { Main } from './main';
import { NotFound } from './notFound';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
