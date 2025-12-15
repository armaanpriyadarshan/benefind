import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>Home</Text>
      <Text style={{ marginTop: 8, opacity: 0.6 }}>Placeholder home screen.</Text>
    </View>
  );
}