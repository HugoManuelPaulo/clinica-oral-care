import { Pressable, StyleSheet, Text, View } from "react-native";
import type { Appointment } from "@/src/data/demoData";
import { colors, shadow } from "@/src/theme";

type Props = { appointment: Appointment; onPress?: () => void };

export function AppointmentCard({ appointment, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.date}>
        <Text style={styles.day}>{appointment.day.slice(0, 2).toUpperCase()}</Text>
        <Text style={styles.number}>{appointment.date.match(/\d+/)?.[0]}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.statusRow}>
          <Text style={styles.treatment}>{appointment.treatment}</Text>
          <View style={styles.badge}><Text style={styles.badgeText}>Bevestigd</Text></View>
        </View>
        <Text style={styles.detail}>◷ {appointment.time}  ·  {appointment.dentist}</Text>
        <Text style={styles.link}>Details bekijken →</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: 16,
    borderRadius: 22,
    backgroundColor: colors.surface,
    padding: 17,
    ...shadow,
  },
  pressed: { opacity: 0.82, transform: [{ scale: 0.99 }] },
  date: {
    width: 61,
    height: 70,
    borderRadius: 17,
    backgroundColor: colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
  },
  day: { color: colors.primary, fontWeight: "800", fontSize: 11, letterSpacing: 1 },
  number: { color: colors.primaryDark, fontWeight: "800", fontSize: 25 },
  content: { flex: 1, justifyContent: "center", gap: 6 },
  statusRow: { flexDirection: "row", alignItems: "flex-start", gap: 7 },
  treatment: { flex: 1, color: colors.text, fontWeight: "800", fontSize: 16 },
  badge: { backgroundColor: "#E9F7F0", borderRadius: 20, paddingHorizontal: 8, paddingVertical: 4 },
  badgeText: { color: colors.success, fontSize: 9, fontWeight: "800" },
  detail: { color: colors.muted, fontSize: 12 },
  link: { color: colors.primary, fontSize: 12, fontWeight: "800", marginTop: 2 },
});