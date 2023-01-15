import { StyleSheet, useColorScheme, View } from "react-native";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Newsletter } from "./components/Newsletter";

const Stack = createStackNavigator();
export default function App() {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#9b3c3c" }
          : { backgroundColor: "#333333" },
      ]}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen
            name="Newsletter"
            component={Newsletter}
            options={{ title: "Subscribe" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#2d3f0b",
  },
});
