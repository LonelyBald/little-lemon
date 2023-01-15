import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { useState } from "react";
import { validateEmail } from "../utils";

export const Newsletter = () => {
  const [emailInput, setEmailInput] = useState("");
  const isEmailValid = validateEmail(emailInput);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo-grey.png")}
      />
      <Text style={styles.title}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.input}
        value={emailInput}
        onChangeText={setEmailInput}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Type your email"
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          Alert.alert("Thanks for subscribing, stay tuned!");
        }}
        disabled={!isEmailValid}
      >
        <Text style={styles.textButton}>Subscribe</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
  title: {
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    marginBottom: 32,
  },
  input: {
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
  },
  button: {
    width: "100%",
    height: "5%",
    paddingRight: "3%",
    paddingLeft: "3%",
    backgroundColor: "#2d3f0b",
    borderRadius: 12,
  },
  textButton: {
    fontSize: 20,
    color: "white",
    padding: 5,
    marginLeft: "35%",
  },
});
