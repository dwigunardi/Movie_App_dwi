import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  Alert,
  FlatList,
  Image,
  ActivityIndicator,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  interpolateColor,
  Extrapolate,
} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NativeBaseProvider, VStack, Box, Button} from 'native-base';

const {width, height} = Dimensions.get('screen');

const textColor = 'white';
const gray = '#A0A0A0';
const slideWidth = width * 0.75;
const slideHeight = height * 0.5;

const getMovieUri = 'https://image.tmdb.org/t/p/w500';
const Slide = ({item, scrollOffset, navigation, index}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const input = scrollOffset.value / slideWidth;
    const inputRange = [index - 1, index, index + 1];

    return {
      transform: [
        {
          scale: interpolate(
            input,
            inputRange,
            [0.8, 1, 0.8],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      key={index}
      style={[
        {
          flex: 1,
          width: slideWidth,
          height: slideHeight,
          paddingVertical: 10,
        },
        animatedStyle,
      ]}>
      <View
        style={{
          padding: 5,
          alignItems: 'center',
          borderRadius: 10,
          height: '100%',
          justifyContent: 'center',
        }}>
        <Box border="2" borderRadius="md" >
          <VStack space="4" justifyContent="center" alignItems="center">
            <Box px="2" pt="2" borderRadius={'lg'}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Detail', {
                    id: item.id,
                    name: item.original_title,
                  })
                }>
                <Image
                  source={{
                    uri: `${getMovieUri + item.poster_path}`,
                  }}
                  alt="image"
                  style={{
                    borderRadius: 10,
                    width: 300,
                    height: 350,
                    resizeMode: 'cover',
                  }}
                />
              </TouchableOpacity>
            </Box>
            <Box px="4" className="flex justify-center align-middle">
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                className=" text-white text-base font-bold text-clip">
                {item.original_title}
              </Text>
            </Box>
            <Box px="4">
              <Text className="text-slate-300 font-mono font-light"></Text>
            </Box>
          </VStack>
        </Box>
      </View>
    </Animated.View>
  );
};

const Indicator = ({scrollOffset, index}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const input = scrollOffset.value / slideWidth;
    const inputRange = [index - 1, index, index + 1];
    const animatedColor = interpolateColor(input, inputRange, [
      gray,
      textColor,
      gray,
    ]);

    return {
      width: interpolate(input, inputRange, [20, 40, 20], Extrapolate.CLAMP),
      backgroundColor: animatedColor,
    };
  });

  return (
    <Animated.View
      style={[
        {
          marginHorizontal: 5,
          height: 20,
          borderRadius: 10,
          backgroundColor: textColor,
        },
        animatedStyle,
      ]}
    />
  );
};

const IndicatorExample = props => {
  const {data, navigation} = props;
  const scrollOffset = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollOffset.value = event.contentOffset.x;
    },
  });
  //   console.log(props);
  const getMovieUri = 'https://image.tmdb.org/t/p/w500';
  return (
    <View>
      <Animated.ScrollView
        scrollEventThrottle={1}
        horizontal
        snapToInterval={slideWidth}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          paddingHorizontal: (width - slideWidth) / 4,
          justifyContent: 'center',
        }}
        onScroll={scrollHandler}>
        {data.map((slide, index) => {
          // console.log(slide.backdrop_path)
          return (
            <Slide
              key={index}
              index={index}
              item={slide}
              scrollOffset={scrollOffset}
              navigation={navigation}
            />
          );
        })}
      </Animated.ScrollView>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        {data.map((_, index) => {
          return (
            <Indicator key={index} index={index} scrollOffset={scrollOffset} />
          );
        })}
      </View>
    </View>
  );
};

export default IndicatorExample;
