import { useContext } from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { MovieContext } from '../context/MovieStore';


function TestCarousel() {
const movieItem = useContext(MovieContext)
const getMovieUri = "https://image.tmdb.org/t/p/w500"
// console.log(movieItem[0].poster_path)
const { width } = Dimensions.get('window');
const CardLength = width * 0.8
const Spacing = width * 0.02
const SideCardLength = (width * 0.18) / 2
    const data = [
        {
            id : 1,
            tittle : "first Item",
        },
        {
            id: 2,
            tittle : "Second item"
        },
        {
            id: 3,
            tittle : "third item"
        }
    ]
    return (
        <View>
            <Carousel
                loop
                width={width}
                height={width /2 }
                autoPlay={true}
                data={data}
                scrollAnimationDuration={1000}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item, index }) => {
                console.log(item)
                return(
                    <View
                    >
                        <Image
                            source={require('../image/new-marvel-disney-plus-banner-revealed-day.webp')}
                            alt="image"
                          />
                    </View>
                )}}
            />
        </View>
    );
}

export default TestCarousel;