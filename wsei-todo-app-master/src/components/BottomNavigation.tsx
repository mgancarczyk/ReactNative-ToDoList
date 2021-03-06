import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import Home from '../screens/Home';
import TodoListScreen from '../screens/TodoList';
import Add from '../screens/Add';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#e91e63'
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="TodoList"
                component={TodoListScreen}
                options={{
                    tabBarLabel: 'TodoList',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="ballot" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Add"
                component={Add}
                options={{
                    tabBarLabel: 'Add',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="content-paste" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;