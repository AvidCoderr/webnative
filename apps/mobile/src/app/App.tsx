import { NavigationContainer } from '@react-navigation/native';
import { MobileNavigationStack } from './utils/Navigation';
import React from 'react';
import { AppContext } from './utils/Context';
import { StoreState } from '@fullerstack/agx-store';
import { IAppState } from './models';

export default function App() {
  const store: StoreState<IAppState> = new StoreState<IAppState>({});

  return (
    <NavigationContainer>
      <AppContext.Provider value={{ store }}>
        <MobileNavigationStack />
      </AppContext.Provider>
    </NavigationContainer>
  );
}
