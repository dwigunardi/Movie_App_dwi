import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import {Image, View, Text, TouchableOpacity, Switch} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import {UserContext} from '../context/UserContext';
import DetailScreen from './DetailScreen';
import TestReanimated from './TestReanimated';
import {ColorContext} from '../context/ColorSceme';


const Stack = createNativeStackNavigator();

function StackScreen() {
  const dataUser = React.useContext(UserContext);
  const findId = dataUser.find(id => 1);
  const ChangeColorMode = React.useContext(ColorContext);
  // const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => ChangeColorMode.setEnabled(previousState => !previousState);
  // React.useEffect(() => {
  //   ChangeColorMode.isEnabled ? ChangeColorMode.setColor('dark') : ChangeColorMode.setColor('light')
   
  // }, [ChangeColorMode.isEnabled]);
  // console.log(ChangeColorMode.colorScheme);
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_bottom',
        headerRight: ({route}) => (
          // <Switch
          //   offTrackColor="light.100"
          //   onTrackColor="dark.200"
          //   onThumbColor="rose.400"
          //   offThumbColor="rose.50"
          //   onValueChange={
          //     true
          //       ? ChangeColorMode.setColor('dark')
          //       : ChangeColorMode.setColor('light')
          //   }
          // />
          <Switch  trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={ChangeColorMode.isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={ChangeColorMode.isEnabled} />
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
          backgroundColor: ChangeColorMode.isEnabled ? '#222425' : '#f4f3f4',
        },
        gestureEnabled:true,
        gestureDirection:'horizontal',
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({navigation}) => ({
          header: props => false,
        })}
      />
      <Stack.Screen
        name="TestReanimated"
        component={TestReanimated}
        options={{
          header: props => false,
          gestureEnabled:true,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackScreen;
