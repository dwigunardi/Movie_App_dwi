import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useContext} from 'react';
import {NativeBaseProvider} from 'native-base';
import {MovieContext} from '../context/MovieStore';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailScreen = props => {
  const {navigation, route} = props;
  const {name, id} = route.params;
  const MovieData = useContext(MovieContext);
  const findId = MovieData.find(data => data.id == id);
  const getMovieUri = 'https://image.tmdb.org/t/p/w500';
  const windowWidth = Dimensions.get('screen').width;
  const windowHeight = Dimensions.get('screen').height;
  // console.log(findId)
  return (
    <NativeBaseProvider>
      <ScrollView>
        <View className="h-screen bg-black m-0 relative">
          <Image
            source={{
              uri: `${getMovieUri + findId.poster_path}`,
            }}
            alt="image"
            style={{
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              width: windowWidth,
              height: windowHeight / 3,
              resizeMode:'cover'
            }}
          />
          <View className="m-4 absolute top-4">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View className="mt-[-30px]">
            <Text className="text-white text-lg">Harusnya pas yah</Text>
          </View>
          <Text className="text-white text-lg">{name}</Text>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default DetailScreen;
