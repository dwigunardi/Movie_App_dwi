import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {NativeBaseProvider} from 'native-base';
import {MovieContext} from '../context/MovieStore';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const DetailScreen = props => {
  const {navigation, route} = props;
  const {name, id} = route.params;
  const MovieData = useContext(MovieContext);
  const findId = MovieData.item.find(data => data.id == id);
  const getMovieUri = 'https://image.tmdb.org/t/p/w500';
  const windowWidth = Dimensions.get('screen').width;
  const windowHeight = Dimensions.get('screen').height;
  // console.log(findId)
  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      console.log(e)
    })
    return () => {
      navigation.removeListener('swipe', (e) => {
        console.log(e)
      })
    };
  }, []);
  return (
    <NativeBaseProvider>
      <ScrollView>
        <View className="container h-screen m-0 bg-black">
          <View className="relative">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="absolute z-50 top-4 left-4">
              <Icon name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: windowWidth,
              height: windowHeight / 3,
              position: 'relative',
            }}>
            <View className="absolute top-0 bottom-0 w-full">
              <LinearGradient
                colors={['transparent', 'black']}
                style={{flex: 1}}
                className="z-10 w-full h-full opacity-100"
              />
            </View>
            <Image
              source={{
                uri: `${getMovieUri + findId.backdrop_path}`,
              }}
              alt="image"
              className="object-cover w-full h-full bg-center bg-no-repeat bg-cover"
            />
          </View>
          <View className="">
            <Text className="text-lg text-white">Harusnya pas yah</Text>
          </View>
          <Text className="text-lg text-white">{name}</Text>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default DetailScreen;
