import { Button, View } from 'react-native';
import { Text } from '@webnative/wrapsody';
import { INavigationParams, IUser } from '../models';
import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../utils/Context';

const Screens = ['Profile', 'Notifications', 'Settings', 'Admin'] as const;

const data: IUser[] = [
  {
    id: 1,
    name: 'John Doe',
    admin: true,
  },
  {
    id: 2,
    name: 'Jane Doe',
    admin: false,
  },
];

const fetchUserMock = async (url: string): Promise<IUser | null> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(data[Math.round(Math.random())]), 500)
  );
};

export function HomeScreen({ navigation }: INavigationParams) {
  const [user, setUser] = useState<IUser | null>(null);
  const { store } = useContext(AppContext);

  useEffect(() => {
    const claimId = store.claimSlice('USER');
    const userSub = store
      .select$<IUser>('USER')
      .subscribe((user) => setUser(user));

    fetchUserMock('https://example.com').then((user) => {
      if (user) {
        store.setState<IUser>(claimId, user, 'UPDATE_USER');
      }
    });
    return () => {
      userSub.unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen ({user?.name})</Text>

      {Screens.map((screen) =>
        // only show admin screen if user is admin
        user?.admin || screen !== 'Admin' ? (
          <Button
            key={screen}
            title={screen}
            onPress={() => navigation.navigate(screen)}
          />
        ) : null
      )}
    </View>
  );
}
