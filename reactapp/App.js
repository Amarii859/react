import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import Challange from "./screen/challange";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Challange />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
});