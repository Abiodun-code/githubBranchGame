import * as React from "react"
import { Text, SafeAreaView, View } from "react-native"

const Category = () => {
  return (
    <SafeAreaView className="flex-1 p-3">
      <View>
        <Text className="text-2xl text-[#1da1f2] text-start" style={{fontFamily: "Medium"}}>Categories</Text>
      </View>
      <View className="flex-1">
        <Text>Images</Text>
      </View>
    </SafeAreaView>
  )
}

export default Category