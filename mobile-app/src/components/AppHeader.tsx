import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/src/theme";

type Props = { eyebrow?: string; title: string; subtitle?: string };

export function AppHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <View style={styles.wrap}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 7, marginBottom: 22 },
  eyebrow: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  title: {
    color: colors.text,
    fontSize: 29,
    lineHeight: 35,
    fontWeight: "800",
    letterSpacing: -0.7,
  },
  subtitle: { color: colors.muted, fontSize: 15, lineHeight: 22 },
});