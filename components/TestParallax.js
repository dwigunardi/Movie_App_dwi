import React, {useRef} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';

import {
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  View,
  useWindowDimensions,
} from 'react-native';

const TestParallax = () => {
  // Dummy Data to show inside the scrollView
  let a = [];
  for (var i = 10; i < 30; i++) {
    a.push({
      item: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    });
  }

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const scrollPosition = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollPosition.value = event.contentOffset.y;
    },
  });

  const viewabilityConfig = useRef({viewAreaCoveragePercentThreshold: 100});

  ////////////////////////////
  const {height, width} = useWindowDimensions();
  const Item = ({index}) => {
    const textTranslate = useAnimatedStyle(() => {
      const translateY = interpolate(
        scrollPosition.value,
        [
          ((index - 1) * height) / 2,
          (index * height) / 2,
          ((index + 1) * height) / 2,
        ],
        [-100, 0, 100],
      );
      return {
        transform: [{translateY}],
      };
    }, []);
    return (
      <View key={index} style={styles.scrollContent}>
        <Animated.Image
          style={[
            {
              height: height * 2,
              width: width,
              resizeMode: 'cover',
            },
            textTranslate,
          ]}
          source={{uri: 'https://random.imagecdn.app/1920/1080'}}
        />
        <Animated.Text
          style={[
            {
              color: 'white',
              position: 'absolute',
              zIndex: 99,
              fontSize: 50,
              bottom: 10,
            },
          ]}>
          hehehehhehe
        </Animated.Text>
      </View>
    );
  };
  ///////////////////
  return (
    <View style={styles.view}>
      <AnimatedFlatList
        onScroll={handleScroll}
        data={a}
        scrollEventThrottle={16}
        renderItem={({item, index}) => {
          return <Item scrollPosition={scrollPosition} index={index} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
  },
  scrollView: {
    with: '100%',
    height: '100%',
  },
  headerName: {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
    color: 'black',
    zIndex: 12,
    top: 20,
    left: 100,
  },
  header: {
    position: 'absolute',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  contentRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  profileDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: 'black',
    paddingTop: 20,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  scrollContent: {
    height: Dimensions.get('screen').height / 2,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default TestParallax;
