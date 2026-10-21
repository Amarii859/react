import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import ProductScreen from "./screen/ProductScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      < ProductScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
});