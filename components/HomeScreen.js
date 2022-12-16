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
  Alert,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import {MovieContext} from '../context/MovieStore';
import {NativeBaseProvider, VStack, Box, Button} from 'native-base';
import AnimatedCarousel from './AnimatedCarousel';
import ListFooter from './ListFooter';
const HomeScreen = (props) => {
  const {navigation} = props
  const [loading, setLoading] = useState(true);
  const [ended, setEnded] = useState(false);
  const movieItem = useContext(MovieContext);
  const getMovieUri = 'https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  // console.log(movieItem.length)

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
  const data = [...movieItem.slice(0, 5)];
  const Check = () => {
    if (ended) {
      if (ended) {
        data.push(5, 10);
      }
    }
  };
  return (
    <NativeBaseProvider>
      <ScrollView>
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
              <Text className="text-white ml-7 mt-5 font-serif font-bold text-xl">
                Coming Soon
              </Text>
              <AnimatedCarousel />
              <FlatList
                initialScrollIndex={0}
                horizontal={true}
                data={movieItem.slice(0, 5)}
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
                          <TouchableOpacity onPress={() => navigation.navigate('Detail', {
                            id:item.id,
                            name:item.original_title,
                          })}>
                            <Image
                              source={{
                                uri: `${getMovieUri + item.poster_path}`,
                              }}
                              alt="image"
                              style={{
                                borderRadius: 10,
                                width: 150,
                                height: 250,
                              }}
                            />
                          </TouchableOpacity>
                          {/* </AspectRatio> */}
                        </Box>
                        <Box
                          px="4"
                          className="flex justify-center align-middle">
                          <Text
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            className="w-32 text-white text-base font-bold text-clip">
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
                onEndReached={props => setEnded(true)}
                onEndReachedThreshold={0.2}
                ListFooterComponent={ListFooter}
              />
            </Animated.View>
          )}

              <Button onPress={() => navigation.navigate('TestReanimated')}>GO test</Button>
          {/* <AnimatedLottieView source={require('../image/29313-netflix-logo-swoop.json')} autoPlay loop style={{padding:200}} /> */}
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
