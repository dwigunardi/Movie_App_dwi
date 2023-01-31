import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SettingsScreen from './SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackScreen from './StackScreen';
import {ColorContext, ColorProvider} from '../context/ColorSceme';
const BottomRoute = () => {
    const [darkTheme,setDarkTheme] = useState(false)
  const Tab = createBottomTabNavigator();
  const theme = useContext(ColorContext)
  useEffect(() => {
 
    theme.colorScheme == 'dark' ? setDarkTheme(true) : setDarkTheme(false)
  }, [theme.colorScheme])
  console.log(darkTheme, 'ini')
  return (
    <NavigationContainer>
      <Tab.Navigator
        backBehavior="history"
        swipeEnabled={true}
        animationEnabled={true}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor:
              darkTheme
                ? 'rgba(34,36,40,1)'
                : 'rgba(255, 255, 255,1)',
            position: 'absolute',
            borderTopWidth: 0,
          },
        })}>
        <Tab.Screen
          name="Stack"
          component={StackScreen}
          options={props => {
            // console.log('ini props =>', props)
            const {navigation} = props;
            return {
              tabBarLabel: 'Home',
              tabBarActiveTintColor: 'red',
              tabBarInactiveTintColor: darkTheme ? '#fff' : '#000',
              tabBarIcon: ({focused, color, size}) => {
                let iconName;
                // console.log('ini focused => ', navigation.getState().routes.map((data, idx) => data.name == 'Stack'))
                const routeName = navigation
                  .getState()
                  .routes.map((data, idx) => data.name);
                if (routeName[0] == 'Stack') {
                  iconName = focused ? 'home' : 'home-outline';
                }
                return <Icon name={iconName} color={color} size={size} />;
              },
            };
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={props => {
            // console.log('ini props =>', props)
            const {navigation} = props;
            return {
              tabBarLabel: 'Settings',
              tabBarActiveTintColor: 'red',
              tabBarInactiveTintColor: darkTheme ? '#fff' : '#000',
              tabBarIcon: ({focused, color, size}) => {
                let iconName;
                // console.log('ini focused => ', navigation.getState().routes.map((data, idx) => data.name == 'Stack'))
                const routeName = navigation
                  .getState()
                  .routes.map((data, idx) => data.name);
                if (routeName[1] == 'Settings') {
                  iconName = focused ? 'menu' : 'menu-open';
                }
                return <Icon name={iconName} color={color} size={size} />;
              },
            };
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default BottomRoute;
