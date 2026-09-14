import { useState } from "react";
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppHeader } from "@/src/components/AppHeader";
import { availableDates, availableTimes } from "@/src/data/mock";
import { colors, shadow } from "@/src/theme";

export default function AppointmentsScreen() {
  const [selectedDate, setSelectedDate] = useState("24 sep");
  const [selectedTime, setSelectedTime] = useState("10:30");

  const confirm = () => Alert.alert(
    "Afspraak gereserveerd",
    `${selectedDate} om ${selectedTime}. Dit is een demonstratie; er is niets verzonden.`
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <AppHeader eyebrow="Afspraak maken" title="Wanneer komt het u uit?" subtitle="Kies een beschikbare datum en tijd." />

        <Text style={styles.label}>Datum</Text>
        <View style={styles.dates}>
          {availableDates.map(item => {
            const active = item.label === selectedDate;
            return (
              <Pressable key={item.label} onPress={() => setSelectedDate(item.label)} style={[styles.date, active && styles.selected]}>
                <Text style={[styles.dateDay, active && styles.selectedText]}>{item.day}</Text>
                <Text style={[styles.dateNumber, active && styles.selectedText]}>{item.date}</Text>
              </Pressable>
            );
          })}
        </View>

        <Text style={styles.label}>Beschikbare tijden</Text>
        <View style={styles.times}>
          {availableTimes.map(time => {
            const active = time === selectedTime;
            return <Pressable key={time} onPress={() => setSelectedTime(time)} style={[styles.time, active && styles.timeSelected]}><Text style={[styles.timeText, active && styles.selectedText]}>{time}</Text></Pressable>;
          })}
        </View>

        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>Uw keuze</Text>
          <Text style={styles.summaryText}>Periodieke controle</Text>
          <Text style={styles.summaryDetail}>Donderdag {selectedDate} · {selectedTime}</Text>
          <Text style={styles.summaryDetail}>Dr. Sofia Martins · 30 minuten</Text>
        </View>

        <Pressable onPress={confirm} style={styles.button}><Text style={styles.buttonText}>Afspraak bevestigen</Text></Pressable>
        <Text style={styles.disclaimer}>Demomodus: de getoonde beschikbaarheid is fictief.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: 22, paddingBottom: 40 },
  label: { color: colors.text, fontWeight: "900", fontSize: 15, marginTop: 13, marginBottom: 12 },
  dates: { flexDirection: "row", justifyContent: "space-between", gap: 8 },
  date: { flex: 1, paddingVertical: 13, borderRadius: 16, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, alignItems: "center" },
  selected: { backgroundColor: colors.primary, borderColor: colors.primary },
  dateDay: { color: colors.muted, fontSize: 10, fontWeight: "800" },
  dateNumber: { color: colors.text, fontSize: 20, fontWeight: "900", marginTop: 2 },
  selectedText: { color: "white" },
  times: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  time: { width: "30%", paddingVertical: 12, borderRadius: 13, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, alignItems: "center" },
  timeSelected: { backgroundColor: colors.primaryDark, borderColor: colors.primaryDark },
  timeText: { color: colors.text, fontWeight: "800" },
  summary: { backgroundColor: colors.surface, borderRadius: 22, padding: 20, marginTop: 31, ...shadow },
  summaryTitle: { color: colors.primary, fontSize: 12, fontWeight: "900", textTransform: "uppercase", letterSpacing: 1 },
  summaryText: { color: colors.text, fontSize: 18, fontWeight: "900", marginTop: 10 },
  summaryDetail: { color: colors.muted, marginTop: 5, fontSize: 13 },
  button: { height: 52, borderRadius: 15, backgroundColor: colors.primary, alignItems: "center", justifyContent: "center", marginTop: 20 },
  buttonText: { color: "white", fontWeight: "900", fontSize: 15 },
  disclaimer: { color: colors.muted, fontSize: 11, textAlign: "center", marginTop: 13 },
});