import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Pressable, Text, View } from "react-native";

const KEY = "session_mode";

export default function Auth() {
  const setModeAndGo = async (mode: "user" | "guest") => {
    await SecureStore.setItemAsync(KEY, mode);
    router.replace("/home");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", padding: 24, gap: 12 }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>Auth (Placeholder)</Text>
      <Text style={{ opacity: 0.6 }}>Login or continue as guest.</Text>

      <Pressable onPress={() => setModeAndGo("user")} style={{ padding: 12, borderWidth: 1, borderRadius: 8, alignItems: "center" }}>
        <Text>Log in</Text>
      </Pressable>

      <Pressable onPress={() => setModeAndGo("guest")} style={{ padding: 12, borderWidth: 1, borderRadius: 8, alignItems: "center" }}>
        <Text>Continue as guest</Text>
      </Pressable>
    </View>
  );
}