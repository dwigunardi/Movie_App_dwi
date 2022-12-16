import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, {SensorType, useAnimatedSensor, useAnimatedStyle} from 'react-native-reanimated'
import bg from '../image/WallpaperDog-10760203.jpg'

const TestReanimated = () => {
    const sensor = useAnimatedSensor(SensorType.ROTATION)
    const ImageStyle = useAnimatedStyle(() => {
        // console.log(sensor?.sensor.value)

        return {}
    })
  return (  
    <View style={styles.container}>
      <Image source={bg} style={styles.Image} />
    </View>
  )
}

export default TestReanimated

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    },
    Image: {
        width:'100%',
        height:'100%'
    }
})