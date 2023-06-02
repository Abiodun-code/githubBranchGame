import { useNavigation } from "@react-navigation/native"
import { View, Text, StyleSheet, Button } from "react-native"

const Overview = () => {
  const navigation = useNavigation()
  return (
    <View className="dark:bg-black flex-1">
      <Text style={{ fontFamily: "Light" }}>Overview</Text>
    </View>
  )
}

export default Overview