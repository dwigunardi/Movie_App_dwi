import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
export default function ListFooter() {
  return (
    <View className="relative container">
        <View className="mt-[150px] ml-3 mr-3">
      <Icon name='rightcircleo' color={'white'} size={40} />
      {/* <Text className="text-pink-100 text-base">Load more...</Text> */}
      </View>
    </View>
  )
}