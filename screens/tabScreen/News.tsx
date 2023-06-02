import { useNavigation } from "@react-navigation/native"
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native"
import Category from "../../components/home/Category"

const News = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView className="flex-1">
      <Category/>
    </SafeAreaView>
  )
}

export default News