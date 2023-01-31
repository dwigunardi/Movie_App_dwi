import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
const Drawer = createDrawerNavigator();

const DrawerNav = ({navigation}) => {
    return (
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} options={({route}) => ({
          headerShown:false,
        })} />
      </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({})

export default DrawerNav;
