import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './types';
import HomeScreen from '../screens/Home/HomeScreen';
import PeopleListScreen from '../screens/People/PeopleListScreen';
import PersonDetailScreen from '../screens/People/PersonDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Gift Planner' }}
      />
      <Stack.Screen
        name="PeopleList"
        component={PeopleListScreen}
        options={{ title: 'People' }}
      />
      <Stack.Screen
        name="PersonDetail"
        component={PersonDetailScreen}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  );
};
