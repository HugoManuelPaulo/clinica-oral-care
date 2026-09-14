import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppHeader } from "@/src/components/AppHeader";
import { history } from "@/src/data/demoData";
import { colors } from "@/src/theme";

export default function HistoryScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <AppHeader eyebrow="Mijn dossier" title="Bezoekhistorie" subtitle="Een overzicht van uw afgeronde afspraken." />
        <View style={styles.timeline}>
          {history.map((item, index) => (
            <View key={item.id} style={styles.row}>
              <View style={styles.rail}><View style={styles.dot} />{index < history.length - 1 ? <View style={styles.line} /> : null}</View>
              <View style={styles.card}>
                <Text style={styles.date}>{item.date} · {item.time}</Text>
                <Text style={styles.title}>{item.treatment}</Text>
                <Text style={styles.dentist}>{item.dentist}</Text>
                <Text style={styles.status}>✓ Afgerond</Text>
              </View>
            </View>
          ))}
        </View>
        <Text style={styles.note}>Dit demonstratieoverzicht bevat uitsluitend fictieve gegevens en is geen medisch dossier.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: 22 },
  timeline: { marginTop: 5 },
  row: { flexDirection: "row", gap: 14, minHeight: 137 },
  rail: { width: 22, alignItems: "center" },
  dot: { width: 15, height: 15, borderRadius: 8, backgroundColor: colors.primary, borderWidth: 4, borderColor: colors.primarySoft },
  line: { width: 2, flex: 1, backgroundColor: colors.border },
  card: { flex: 1, backgroundColor: colors.surface, borderRadius: 18, padding: 16, marginBottom: 15, borderWidth: 1, borderColor: colors.border },
  date: { color: colors.primary, fontSize: 11, fontWeight: "800" },
  title: { color: colors.text, fontSize: 16, fontWeight: "900", marginTop: 6 },
  dentist: { color: colors.muted, fontSize: 13, marginTop: 3 },
  status: { color: colors.success, fontSize: 11, fontWeight: "800", marginTop: 9 },
  note: { color: colors.muted, fontSize: 11, lineHeight: 17, textAlign: "center", marginTop: 15 },
});