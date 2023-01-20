import { Button, View } from 'react-native';
import { Text } from '@webnative/wrapsody';
import { INavigationParams } from '../models';

export function ProfileScreen({ navigation }: INavigationParams) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
