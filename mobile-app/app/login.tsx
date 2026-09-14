import { useState } from "react";
import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { colors, shadow } from "@/src/theme";

export default function LoginScreen() {
  const [email, setEmail] = useState("demo@oralcare.app");
  const [password, setPassword] = useState("demo1234");

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <View style={styles.brand}>
          <View style={styles.logo}><Text style={styles.logoText}>◇</Text></View>
          <Text style={styles.brandName}>OralCare</Text>
          <Text style={styles.brandTag}>Uw tandarts, altijd dichtbij.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Welkom terug</Text>
          <Text style={styles.subtitle}>Log in om uw afspraken te beheren.</Text>

          <Text style={styles.label}>E-mailadres</Text>
          <TextInput
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            onChangeText={setEmail}
            style={styles.input}
            value={email}
          />

          <Text style={styles.label}>Wachtwoord</Text>
          <TextInput
            autoComplete="password"
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            value={password}
          />

          <Pressable
            accessibilityRole="button"
            disabled={!email || !password}
            onPress={() => router.replace("/(tabs)")}
            style={({ pressed }) => [styles.button, pressed && { opacity: 0.85 }]}
          >
            <Text style={styles.buttonText}>Inloggen</Text>
          </Pressable>
          <Pressable accessibilityRole="button"><Text style={styles.forgot}>Wachtwoord vergeten?</Text></Pressable>
        </View>
        <Text style={styles.demo}>Portfolio demo · Er worden geen echte patiëntgegevens gebruikt.</Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.primarySoft },
  container: { flex: 1, justifyContent: "center", padding: 24 },
  brand: { alignItems: "center", marginBottom: 28 },
  logo: { width: 66, height: 66, borderRadius: 22, backgroundColor: colors.primaryDark, alignItems: "center", justifyContent: "center", marginBottom: 12 },
  logoText: { color: "white", fontSize: 34 },
  brandName: { color: colors.primaryDark, fontSize: 28, fontWeight: "900", letterSpacing: -0.8 },
  brandTag: { color: colors.muted, marginTop: 3 },
  card: { backgroundColor: colors.surface, borderRadius: 26, padding: 24, ...shadow },
  title: { color: colors.text, fontWeight: "900", fontSize: 25 },
  subtitle: { color: colors.muted, marginTop: 5, marginBottom: 24 },
  label: { color: colors.text, fontWeight: "700", fontSize: 13, marginBottom: 7 },
  input: { borderWidth: 1, borderColor: colors.border, backgroundColor: "#FBFDFC", borderRadius: 14, paddingHorizontal: 14, height: 49, marginBottom: 16, color: colors.text },
  button: { height: 51, borderRadius: 15, backgroundColor: colors.primary, alignItems: "center", justifyContent: "center", marginTop: 5 },
  buttonText: { color: "white", fontWeight: "800", fontSize: 16 },
  forgot: { color: colors.primary, fontWeight: "700", textAlign: "center", marginTop: 18 },
  demo: { color: colors.muted, fontSize: 11, textAlign: "center", marginTop: 22 },
});