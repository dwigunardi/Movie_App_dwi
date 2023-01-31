import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
export default function ListFooter() {
  return (
    <TouchableOpacity onPress={()=> Alert.alert('hy')}>
    <View className="container relative">
        <View className="mt-[150px] ml-3 mr-3">
      <Icon name='rightcircleo' color={'white'} size={40} />
      {/* <Text className="text-base text-pink-100">Load more...</Text> */}
      </View>
    </View>
    </TouchableOpacity>
  )
}