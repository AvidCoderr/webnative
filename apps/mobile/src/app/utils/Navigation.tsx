import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/Home';
import { ProfileScreen } from '../screens/Profile';
import { NotificationsScreen } from '../screens/Notifications';
import { SettingsScreen } from '../screens/Settings';
import { AdminScreen } from '../screens/Admin';

const Stack = createStackNavigator();

export function MobileNavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Admin" component={AdminScreen} />
    </Stack.Navigator>
  );
}
