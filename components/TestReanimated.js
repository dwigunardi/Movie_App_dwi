import {useWindowDimensions,} from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import bg from '../image/bg1.jpg';

const IMAGE_OFFSET = 50;
const PI = Math.PI
const Half_PI = PI / 2

const TestReanimated = ({image}) => {
  const {width, height} = useWindowDimensions();
  const sensor = useAnimatedSensor(SensorType.ROTATION);
  const ImageStyle = useAnimatedStyle(() => {
    const {yaw, pitch, roll} = sensor.sensor.value;
    // console.log(yaw.toFixed(1), pitch.toFixed(1), roll.toFixed(1));
    return {
      top: withTiming(interpolate(pitch, [-Half_PI, Half_PI], [-IMAGE_OFFSET * 2, 0]), {duration:100}) ,
      left: withTiming(interpolate(roll, [-PI, PI], [-IMAGE_OFFSET * 2, 0]), {duration:100}),
    };
  });
  return (
      <Animated.Image
        source={image}
        style={[
          {
            width: width + 2 * IMAGE_OFFSET,
            height: height + 2 * IMAGE_OFFSET,
            resizeMode:'cover',
            opacity:0.7,
          }, ImageStyle
        ]}
      />
  );
};

export default TestReanimated;
