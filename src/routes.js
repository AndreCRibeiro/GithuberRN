import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Usuários">
        <Stack.Screen
          name="Usuários"
          component={Main}
          options={{
            headerStyle: { backgroundColor: '#7159c1' },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen name="Repositórios" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
