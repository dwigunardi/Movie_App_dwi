import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import { Image, View } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

const Stack = createNativeStackNavigator();

function StackScreen() {


  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor:"white",
        headerTitle: (props) => ( // App Logo
        <View>
        <AnimatedLottieView source={require('../image/65556-movies-title-animation.json')} autoPlay loop style={{width:100, height:50}} />
        </View>

      ),
      headerTitleStyle: { flex: 1, textAlign: 'center' },
        headerStyle: {
            backgroundColor: '#222425',
            
        }}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default StackScreen;
