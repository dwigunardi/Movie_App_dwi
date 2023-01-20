/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StackScreen from './components/StackScreen';
import {MovieList} from './context/MovieStore';
import {UserProvider} from './context/UserContext';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createBottomTabNavigator();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <MovieList>
      <UserProvider>
        <NavigationContainer>
          <Tab.Navigator
            backBehavior="history"
            screenOptions={({route}) => ({
              headerShown: false,
              tabBarStyle: {
                paddingHorizontal: 5,
                paddingTop: 0,
                backgroundColor: 'rgba(34,36,40,1)',
                position: 'absolute',
                borderTopWidth: 0,
              },
            })}>
            <Tab.Screen
              name="Stack"
              component={StackScreen}
              options={(props) => {
                // console.log('ini props =>', props)
                const {navigation } = props
                return({
                tabBarLabel: 'Home',
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: '#fff',
                tabBarIcon: ({focused, color, size}) => {
                  let iconName;
                  console.log('ini focused => ', navigation.getState().routes.map((data, idx) => data.name == 'Stack'))
                  const routeName = navigation.getState().routes.map((data, idx) => data.name)
                  if(routeName[0] == 'Stack'){
                    iconName = focused ? 'home' : 'home-outline'
                  }
                  return(
                  <Icon name={iconName} color={color} size={size} />
                )},
              })}}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={(props) => {
                // console.log('ini props =>', props)
                const {navigation } = props
                return({
                tabBarLabel: 'Settings',
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: '#fff',
                tabBarIcon: ({focused, color, size}) => {
                  let iconName;
                  // console.log('ini focused => ', navigation.getState().routes.map((data, idx) => data.name == 'Stack'))
                  const routeName = navigation.getState().routes.map((data, idx) => data.name)
                  if(routeName[1] == 'Settings'){
                    iconName = focused ? 'menu' : 'menu-open'
                  }
                  return(
                  <Icon name={iconName} color={color} size={size} />
                )},
              })}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </UserProvider>
    </MovieList>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
