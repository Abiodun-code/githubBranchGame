import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Button, Pressable, Switch } from "react-native"
import Save from "./screens/tabScreen/Save";
import Home from "./screens/tabScreen/News";
import Overview from "./screens/stackScreen/Overview";
import { useColorScheme } from "nativewind";

// Stack
const Stack = createNativeStackNavigator();

const StackGroup = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabsGroup} options={{ headerShown: false }}/>
      <Stack.Screen name="Overview" component={Overview} options={{
        headerTitleStyle: {
          fontFamily: "Medium"
        },
        headerRight:()=> (
          <Pressable>
            <Text className="text-red-200" style={{fontFamily: "Medium"}}>Save</Text>
          </Pressable>
        )
      }} />
    </Stack.Navigator>
  )
}

// Bottom Tabs
const Tabs = createBottomTabNavigator();

const TabsGroup = () => {
  // Light and Dark mode
  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <Tabs.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, focused, size }) => {
        let iconName;
        if (route.name === "News") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "Save") {
          iconName = focused ? "save" : "save-outline";
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: "#1da1f2",
      tabBarInactiveTintColor: "black",
    })}>
      <Tabs.Screen name="News" component={Home} options={{
        headerTitleStyle: {
          fontFamily: "Medium",
        },
        headerRight:()=>(
          <Switch value={colorScheme === "dark"} onChange={toggleColorScheme}/>
        )
      }}/>
      <Tabs.Screen name="Save" component={Save} options={{
        headerTitleStyle: {
          fontFamily: "Medium"
        }
      }}/>
    </Tabs.Navigator>
  )
}

export default function NavigationRoute (){
  return(
    <NavigationContainer>
      <StackGroup/>
    </NavigationContainer>
  )
}