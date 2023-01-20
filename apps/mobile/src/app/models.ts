import { StoreState } from '@fullerstack/agx-store';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface INavigationParams {
  navigation: any;
  [id: string]: any;
}

export interface IAppState {
  [id: string]: any;
}

export interface IAppContext {
  store: StoreState<IAppState>;
}

export interface IUser {
  id: number;
  name: string;
  admin: boolean;
}
