import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import {Image, View, Text} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import {UserContext} from '../context/UserContext';
import DetailScreen from './DetailScreen';
import TestReanimated from './TestReanimated';

const Stack = createNativeStackNavigator();

function StackScreen() {
  const dataUser = React.useContext(UserContext);
  const findId = dataUser.find(id => 1);
  return (
    <Stack.Navigator
      screenOptions={{
        animation:"slide_from_bottom",
        headerRight: ({route}) => (
          <Text className="text-white font-sans font-bold text-lg">
            Hy, {findId.name}
          </Text>
        ),
        headerTintColor: 'white',
        headerTitle: (
          props, // App Logo
        ) => (
          <View>
            <AnimatedLottieView
              source={require('../image/65556-movies-title-animation.json')}
              autoPlay
              loop
              style={{width: 100, height: 50}}
            />
          </View>
        ),
        headerTitleStyle: {flex: 1, textAlign: 'center'},
        headerStyle: {
          backgroundColor: '#222425',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{
        header:(props) => false,
      }} />
       <Stack.Screen name="TestReanimated" component={TestReanimated} options={{
        header:(props) => false,
      }} />
    </Stack.Navigator>
  );
}

export default StackScreen;
