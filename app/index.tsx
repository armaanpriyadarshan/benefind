import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

const KEY = "session_mode"; // "user" | "guest"

export default function Index() {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    (async () => {
      const mode = await SecureStore.getItemAsync(KEY);
      if (mode) router.replace("/home");
      else setChecking(false);
    })();
  }, []);

  const continueAsGuest = async () => {
    await SecureStore.setItemAsync(KEY, "guest");
    router.replace("/home");
  };

  const login = async () => {
    // TODO: replace with real auth later (Supabase/Firebase/OAuth/etc.)
    await SecureStore.setItemAsync(KEY, "user");
    router.replace("/home");
  };

  if (checking) {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", padding: 24, gap: 12 }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>Auth (Placeholder)</Text>
      <Text style={{ opacity: 0.6 }}>Login or continue as guest.</Text>

      <Pressable onPress={login} style={{ padding: 12, borderWidth: 1, borderRadius: 8, alignItems: "center" }}>
        <Text>Log in</Text>
      </Pressable>

      <Pressable onPress={continueAsGuest} style={{ padding: 12, borderWidth: 1, borderRadius: 8, alignItems: "center" }}>
        <Text>Continue as guest</Text>
      </Pressable>
    </View>
  );
}