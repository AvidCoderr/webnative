import { Button, View } from 'react-native';
import { Text } from '@webnative/wrapsody';
import { INavigationParams } from '../models';

export function NotificationsScreen({ navigation }: INavigationParams) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notifications Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
