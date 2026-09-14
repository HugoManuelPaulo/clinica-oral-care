import { router } from "expo-router";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppointmentCard } from "@/src/components/AppointmentCard";
import { AppHeader } from "@/src/components/AppHeader";
import { nextAppointment, patient } from "@/src/data/demoData";
import { colors, shadow } from "@/src/theme";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <View>
            <Text style={styles.hello}>Goedemorgen,</Text>
            <Text style={styles.name}>{patient.firstName} 👋</Text>
          </View>
          <Pressable style={styles.avatar} onPress={() => router.push("/(tabs)/profile")}><Text style={styles.avatarText}>HP</Text></Pressable>
        </View>

        <AppHeader eyebrow="Volgende afspraak" title="Uw mondzorg, overzichtelijk geregeld." />
        <AppointmentCard appointment={nextAppointment} onPress={() => router.push("/(tabs)/appointments")} />

        <Text style={styles.sectionTitle}>Snel regelen</Text>
        <View style={styles.actions}>
          <Pressable style={styles.action} onPress={() => router.push("/(tabs)/appointments")}>
            <View style={[styles.actionIcon, { backgroundColor: colors.primarySoft }]}><Text style={styles.actionSymbol}>＋</Text></View>
            <Text style={styles.actionTitle}>Nieuwe afspraak</Text>
            <Text style={styles.actionText}>Kies een datum en tijd</Text>
          </Pressable>
          <Pressable style={styles.action}>
            <View style={[styles.actionIcon, { backgroundColor: "#FFF0EB" }]}><Text style={[styles.actionSymbol, { color: colors.accent }]}>☎</Text></View>
            <Text style={styles.actionTitle}>Bel de praktijk</Text>
            <Text style={styles.actionText}>Bij vragen of spoed</Text>
          </Pressable>
        </View>

        <View style={styles.tip}>
          <View style={styles.tipIcon}><Text style={{ fontSize: 22 }}>✦</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.tipTitle}>Tip voor een gezonde mond</Text>
            <Text style={styles.tipText}>Poets tweemaal per dag twee minuten en reinig dagelijks tussen uw tanden.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: 22, paddingBottom: 36 },
  top: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 31 },
  hello: { color: colors.muted, fontSize: 13 },
  name: { color: colors.text, fontSize: 20, fontWeight: "900" },
  avatar: { width: 45, height: 45, borderRadius: 15, backgroundColor: colors.primaryDark, alignItems: "center", justifyContent: "center" },
  avatarText: { color: "white", fontWeight: "800" },
  sectionTitle: { color: colors.text, fontSize: 19, fontWeight: "900", marginTop: 31, marginBottom: 14 },
  actions: { flexDirection: "row", gap: 12 },
  action: { flex: 1, minHeight: 151, borderRadius: 21, backgroundColor: colors.surface, padding: 16, ...shadow },
  actionIcon: { width: 42, height: 42, borderRadius: 13, alignItems: "center", justifyContent: "center", marginBottom: 14 },
  actionSymbol: { color: colors.primary, fontSize: 22, fontWeight: "800" },
  actionTitle: { color: colors.text, fontSize: 14, fontWeight: "800" },
  actionText: { color: colors.muted, fontSize: 11, marginTop: 4, lineHeight: 16 },
  tip: { flexDirection: "row", gap: 14, borderRadius: 22, backgroundColor: colors.primaryDark, padding: 18, marginTop: 27 },
  tipIcon: { width: 43, height: 43, borderRadius: 14, backgroundColor: "rgba(255,255,255,.12)", alignItems: "center", justifyContent: "center" },
  tipTitle: { color: "white", fontWeight: "800", fontSize: 14 },
  tipText: { color: "#C9DDDA", fontSize: 12, lineHeight: 18, marginTop: 4 },
});