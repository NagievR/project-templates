import { FC } from 'react';
import { Routing } from '../pages';
import { withProviders } from './providers';

export const App = withProviders(() => {
  return <Routing />;
}) as FC;
