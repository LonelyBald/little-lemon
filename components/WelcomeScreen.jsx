import { Text, View, StyleSheet, Image, Pressable } from "react-native";

export const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/little-lemon-logo.png")}
        />
        <Text style={styles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("Newsletter");
        }}
      >
        <Text style={styles.textButton}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: "contain",
  },
  title: {
    marginTop: 48,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    width: "90%",
    height: "7%",
    paddingRight: "3%",
    paddingLeft: "3%",
    marginLeft: "5%",
    backgroundColor: "#2d3f0b",
    borderRadius: 12,
  },
  textButton: {
    fontSize: 30,
    color: "white",
    padding: 5,
    marginLeft: "25%",
  },
});
