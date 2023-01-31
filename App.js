/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext} from 'react';

import {StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {MovieList} from './context/MovieStore';
import {UserProvider} from './context/UserContext';
import { ColorProvider } from './context/ColorSceme';
import {NativeBaseProvider, useColorMode, useColorModeValue} from 'native-base';
import BottomRoute from './components/BottomRoute';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const isDarkMode = useColorScheme();

  // const setColorScheme = colorScheme.setColor('dark')
  const text = useColorModeValue('Light', 'Dark');
  const bg = useColorModeValue('warmGray.50', 'coolGray.800');
  const backgroundStyle = {
    backgroundColor: bg == 'warmGray.50' ? Colors.darker : Colors.lighter,
  };
  // console.log(colorScheme.changeColor, 'ini kjab');
  return (
    <NativeBaseProvider>
      <ColorProvider>
        <MovieList>
          <UserProvider>
            <BottomRoute />
          </UserProvider>
        </MovieList>
      </ColorProvider>
    </NativeBaseProvider>
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
