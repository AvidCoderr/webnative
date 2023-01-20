import { StoreState } from '@fullerstack/agx-store';
import React from 'react';
import { IAppState, IAppContext } from '../models';

export const AppContext = React.createContext<IAppContext>({
  store: {} as StoreState<IAppState>,
});
