import { Button, View } from 'react-native';
import { Text } from '@webnative/wrapsody';
import { INavigationParams, IUser } from '../models';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../utils/Context';

export function AdminScreen({ navigation }: INavigationParams) {
  const [user, setUser] = useState<IUser>();
  const { store } = useContext(AppContext);

  useEffect(() => {
    const userSub = store
      .select$<IUser>('USER')
      .subscribe((user) => setUser(user));
    return () => {
      userSub.unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Admin Screen ({user?.name})</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
