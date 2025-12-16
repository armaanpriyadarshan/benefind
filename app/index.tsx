import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [sentTo, setSentTo] = useState<string | null>(null);

  const sendLink = () => {
    const e = email.trim();
    if (!e) return;
    setSentTo(e); // UI-only: replace later with real magic-link call
  };

  const reset = () => {
    setSentTo(null);
    setEmail("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.brand}>Benefind</Text>
        <Text style={styles.tagline}>Navigate government benefits with AI</Text>
      </View>

      <View style={styles.panel}>
        {sentTo ? (
          <>
            <View style={styles.sentHeader}>
              <View style={styles.checkBadge}>
                <Text style={styles.checkText}>✓</Text>
              </View>
              <Text style={styles.title}>Magic link sent</Text>
            </View>

            <Text style={styles.subtitleLeft}>
              We sent a magic link to <Text style={styles.email}>{sentTo}</Text>. Open it on this
              device to sign in.
            </Text>

            <View style={styles.actions}>
              <Pressable style={styles.secondaryButton} onPress={reset}>
                <Text style={styles.secondaryText}>Use a different email</Text>
              </Pressable>

              <View style={styles.dividerRow}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>or</Text>
                <View style={styles.dividerLine} />
              </View>

              <Pressable style={styles.ghostButton}>
                <Text style={styles.ghostText}>Continue as guest</Text>
              </Pressable>
            </View>
          </>
        ) : (
          <>
            <Text style={styles.title}>Sign in</Text>

            <View style={styles.actions}>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email address"
                placeholderTextColor="rgba(255,255,255,0.45)"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                returnKeyType="send"
                onSubmitEditing={sendLink}
              />

              <Pressable style={styles.primaryButton} onPress={sendLink}>
                <Text style={styles.primaryText}>Send magic link</Text>
              </Pressable>

              <Text style={styles.helper}>
                We’ll email you a link to sign in instantly. No password.
              </Text>

              <View style={styles.dividerRow}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>or</Text>
                <View style={styles.dividerLine} />
              </View>

              <Pressable style={styles.ghostButton}>
                <Text style={styles.ghostText}>Continue as guest</Text>
              </Pressable>
            </View>
          </>
        )}

        <Text style={styles.footnote}>
          Educational guidance only — not an official determination. We’ll always link you to the
          official application site.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0B0F14",
    padding: 24,
    justifyContent: "center",
  },
  header: {
    marginBottom: 18,
  },
  brand: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
  tagline: {
    marginTop: 8,
    color: "rgba(255,255,255,0.65)",
    lineHeight: 20,
  },
  panel: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    backgroundColor: "rgba(255,255,255,0.04)",
    padding: 18,
  },

  // Titles
  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
  },

  // Sent state header
  sentHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  checkBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "rgba(34,197,94,0.18)",
    borderWidth: 1,
    borderColor: "rgba(34,197,94,0.35)",
    alignItems: "center",
    justifyContent: "center",
  },
  checkText: {
    color: "#22C55E",
    fontWeight: "900",
    marginTop: -1,
  },

  // Body text
  subtitleLeft: {
    marginTop: 10,
    color: "rgba(255,255,255,0.65)",
    lineHeight: 20,
  },
  email: {
    color: "rgba(255,255,255,0.90)",
    fontWeight: "700",
  },

  actions: {
    marginTop: 16,
    gap: 12,
  },
  input: {
    height: 48,
    borderRadius: 12,
    paddingHorizontal: 14,
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.16)",
    backgroundColor: "rgba(255,255,255,0.03)",
  },
  primaryButton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  primaryText: {
    color: "#0B0F14",
    fontWeight: "700",
  },
  secondaryButton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.16)",
    backgroundColor: "rgba(255,255,255,0.03)",
  },
  secondaryText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  helper: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 12,
    lineHeight: 16,
    textAlign: "center",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 2,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.12)",
  },
  dividerText: {
    color: "rgba(255,255,255,0.45)",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  ghostButton: {
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  ghostText: {
    color: "rgba(255,255,255,0.80)",
    fontWeight: "600",
  },
  footnote: {
    marginTop: 14,
    color: "rgba(255,255,255,0.45)",
    fontSize: 12,
    lineHeight: 16,
  },
});