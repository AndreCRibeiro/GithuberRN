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
      <Stack.Navigator
        headerBackTitleVisible={false}
        headerLayoutPreset="center"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#FFF',
        }}
      >
        <Stack.Screen
          name="Usuários"
          component={Main}
          options={{ title: 'Main' }}
        />
        <Stack.Screen
          name="Repositórios"
          component={User}
          options={({ route }) => ({ title: route.params.user.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
