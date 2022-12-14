import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { moduleName } from "react-native";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import HomeScreen from "../nestedScreens/HomeScreen";
import MapScreen from "../nestedScreens/MapScreen";
import CreatePostsScreen from "./CreatePostsScreen";

const NestedScreen = createStackNavigator();

export default function PostsScreen() {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
}
