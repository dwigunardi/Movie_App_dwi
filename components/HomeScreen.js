import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  Image,
  ActivityIndicator,
  Animated,
} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import {MovieContext} from '../context/MovieStore';
import {
  NativeBaseProvider,
  VStack,
  Box,
  Divider,
  AspectRatio,
  HStack,
} from 'native-base';
const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const movieItem = useContext(MovieContext);
  const getMovieUri = 'https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const fadeOut = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (loading) {
      Animated.timing(fadeOut, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } else if (!loading) {
      Animated.timing(fadeOut, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [loading]);

  return (
    <NativeBaseProvider>
      <View className="h-screen" style={{backgroundColor: 'black'}}>
        {loading ? (
          <View className="h-screen flex justify-center align-middle ">
            <AnimatedLottieView
              source={require('../image/97746-loading-deuna.json')}
              autoPlay
              loop
              style={{}}
            />
          </View>
        ) : (
          <Animated.View style={{opacity: fadeOut}}>
            <FlatList
              initialScrollIndex={0}
              horizontal={true}
              data={movieItem}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{alignSelf: 'stretch'}}
              renderItem={({item}) => (
                <View style={{overflow: 'hidden'}}>
                  <Box border="2" borderRadius="md" marginTop={'10'}>
                    <VStack
                      space="4"
                      justifyContent="center"
                      alignItems="center">
                      <Box px="2" pt="2" borderRadius={'lg'}>
                        {/* <AspectRatio
                          w="full"
                          ratio={{
                            base: 3 / 4,
                            md: 9 / 10,
                          }}
                          height={{
                            base: 200,
                            md: 400,
                          }}
                          > */}
                          <Image
                            source={{
                              uri: `${getMovieUri + item.poster_path}`,
                            }}
                            alt="image"
                            style={{borderRadius:10, width:150, height:250}}
                          />
                        {/* </AspectRatio> */}
                      </Box>
                      <Box px="4" className="flex justify-center align-middle">
                        <Text numberOfLines={1} ellipsizeMode='tail' className="w-32 text-white text-base font-bold text-clip">
                          {item.original_title}
                        </Text>
                      </Box>
                      <Box px="4">
                        <Text className="text-slate-300 font-mono font-light"></Text>
                      </Box>
                    </VStack>
                  </Box>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </Animated.View>
        )}

        {/* <AnimatedLottieView source={require('../image/29313-netflix-logo-swoop.json')} autoPlay loop style={{padding:200}} /> */}
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
