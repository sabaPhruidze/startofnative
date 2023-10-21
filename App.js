import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.pinkBox}>
        <Text style={styles.boldText}>Hello world</Text>
      </View>
      <View style={styles.yellowBox}>
        <Text style={styles.boldText}>
          Lorem <Text>ipsum</Text>
        </Text>
        <Text>Lorem ipsum</Text>
        <Text>Lorem ipsum</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pinkBox: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  yellowBox: {
    backgroundColor: "yellow",
    padding: 20,
    fontWeight: "bold",
  },
});
